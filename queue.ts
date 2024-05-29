/**
 * Its necessary since JSR requires the use of JSR deps.
 * source from: https://github.com/lambdalisue/deno-async/blob/c86ef00a3056b2436b5e90f01bf52c1cbb83b1c8/queue.ts
 */
import { Notify, type WaitOptions } from "./notify.ts";

/**
 * A queue implementation that allows for adding and removing elements, with optional waiting when
 * popping elements from an empty queue.
 *
 * ```ts
 * import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
 * import { Queue } from "https://deno.land/x/async@$MODULE_VERSION/queue.ts";
 *
 * const queue = new Queue<number>();
 * queue.push(1);
 * queue.push(2);
 * queue.push(3);
 * assertEquals(await queue.pop(), 1);
 * assertEquals(await queue.pop(), 2);
 * assertEquals(await queue.pop(), 3);
 * ```
 *
 * @template T The type of items in the queue.
 */
export class Queue<T> {
    #notify = new Notify();
    #items: T[] = [];

    /**
     * Gets the number of items in the queue.
     */
    get size(): number {
        return this.#items.length;
    }

    /**
     * Returns true if the queue is currently locked.
     */
    get locked(): boolean {
        return this.#notify.waiters > 0;
    }

    /**
     * Adds an item to the end of the queue and notifies any waiting consumers.
     *
     * @param {T} value The item to add to the queue.
     */
    push(value: T): void {
        this.#items.push(value);
        this.#notify.notify();
    }

    /**
     * Removes the next item from the queue, optionally waiting if the queue is currently empty.
     *
     * @param {WaitOptions} [options] Optional parameters to pass to the wait operation.
     * @param {AbortSignal} [options.signal] An optional AbortSignal used to abort the wait operation if the signal is aborted.
     * @returns {Promise<T>} A promise that resolves to the next item in the queue.
     * @throws {DOMException} Throws a DOMException with "Aborted" and "AbortError" codes if the wait operation was aborted.
     */
    async pop({ signal }: WaitOptions = {}): Promise<T> {
        while (!signal?.aborted) {
            const value = this.#items.shift();
            if (value) {
                return value;
            }
            await this.#notify.notified({ signal });
        }
        throw new DOMException("Aborted", "AbortError");
    }
}