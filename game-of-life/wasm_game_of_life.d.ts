/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead,
  Alive,
}
/**
*/
export class Universe {
  free(): void;
/**
* Update `cells` according to Game of Life update rules
*
*  - Alive cells with 2 or 3 neighbours survive
*  - Dead cells with 3 neighbours revive
*  - All other cells die or remain dead
*/
  tick(): void;
/**
* Construct an empty universe
* @returns {Universe}
*/
  static new(): Universe;
/**
* Construct a universe with an interesting pattern
* @param {number} width
* @param {number} height
* @returns {Universe}
*/
  static new_fancy(width: number, height: number): Universe;
/**
* @param {number} row
* @param {number} col
*/
  unset_cell(row: number, col: number): void;
/**
* @param {number} row
* @param {number} col
*/
  set_cell(row: number, col: number): void;
/**
* @param {number} row
* @param {number} col
*/
  toggle_cell(row: number, col: number): void;
/**
* Getter for a count of alive cells
* @returns {number}
*/
  num_live_cells(): number;
/**
* Getter for number of entries in curr_cells
* @returns {number}
*/
  num_active_cells(): number;
/**
* Update `to_paint` and return a raw pointer. Note that `to_paint` is stored as a flat vector
* of (row, col) pairs.
* @returns {number}
*/
  cells_to_paint(): number;
/**
* Clear all cells
*/
  clear(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_universe_free: (a: number) => void;
  readonly universe_tick: (a: number) => void;
  readonly universe_new: () => number;
  readonly universe_new_fancy: (a: number, b: number) => number;
  readonly universe_unset_cell: (a: number, b: number, c: number) => void;
  readonly universe_set_cell: (a: number, b: number, c: number) => void;
  readonly universe_toggle_cell: (a: number, b: number, c: number) => void;
  readonly universe_num_live_cells: (a: number) => number;
  readonly universe_num_active_cells: (a: number) => number;
  readonly universe_cells_to_paint: (a: number) => number;
  readonly universe_clear: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
