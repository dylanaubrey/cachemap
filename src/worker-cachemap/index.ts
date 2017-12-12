import Cacheability from "cacheability";
import { PromiseWorker } from "promise-worker";

import {
  CacheHeaders,
  CachemapArgs,
  Metadata,
  PostMessageArgs,
  PostMessageResult,
} from "../types";

export default class WorkerCachemap {
  public static async create(args: CachemapArgs): Promise<WorkerCachemap> {
    const workerCachemap = new WorkerCachemap();
    workerCachemap._worker = new PromiseWorker(new Worker("../worker.js"));
    const { metadata, usedHeapSize } = await workerCachemap._postMessage({ args, type: "create" });
    workerCachemap._setMetadata(metadata, usedHeapSize);
    return workerCachemap;
  }

  private _metadata: Metadata[] = [];
  private _worker: PromiseWorker;
  private _usedHeapSize: number = 0;

  get metadata(): Metadata[] {
    return this._metadata;
  }

  get usedHeapSize(): number {
    return this._usedHeapSize;
  }

  public async clear(): Promise<void> {
    const { metadata, usedHeapSize } = await this._postMessage({ type: "clear" });
    this._setMetadata(metadata, usedHeapSize);
  }

  public async delete(key: string, opts: { hash?: boolean } = {}): Promise<boolean> {
    const { metadata, result, usedHeapSize } = await this._postMessage({ key, opts, type: "delete" });
    this._setMetadata(metadata, usedHeapSize);
    return result;
  }

  public async forEach(callback: (value: any, key: string, cacheability: Cacheability) => void): Promise<void> {
    const { metadata, usedHeapSize } = await this._postMessage({ callback, type: "forEach" });
    this._setMetadata(metadata, usedHeapSize);
  }

  public async get(key: string, opts: { hash?: boolean } = {}): Promise<any> {
    const { metadata, result, usedHeapSize } = await this._postMessage({ key, opts, type: "get" });
    this._setMetadata(metadata, usedHeapSize);
    return result;
  }

  public async has(key: string, opts: { deleteExpired?: boolean, hash?: boolean } = {}): Promise<Cacheability | false> {
    const { metadata, result, usedHeapSize } = await this._postMessage({ key, opts, type: "has" });
    this._setMetadata(metadata, usedHeapSize);
    return result;
  }

  public async set(
    key: string,
    value: any,
    opts: { cacheHeaders?: CacheHeaders, hash?: boolean } = {},
  ): Promise<void> {
    const { metadata, usedHeapSize } = await this._postMessage({ key, opts, type: "set", value });
    this._setMetadata(metadata, usedHeapSize);
  }

  public async size(): Promise<number> {
    const { result } = await this._postMessage({ type: "size" });
    return result;
  }

  private async _postMessage(args: PostMessageArgs): Promise<PostMessageResult> {
    let message: PostMessageResult;

    try {
      message = await this._worker.postMessage(args);
    } catch (error) {
      throw error;
    }

    return message;
  }

  private _setMetadata(metadata: Metadata[], usedHeapSize: number): void {
    this._metadata = metadata;
    this._usedHeapSize = usedHeapSize;
  }
}
