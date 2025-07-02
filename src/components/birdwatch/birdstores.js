// @ts-nocheck
import { readable, derived } from 'svelte/store';
import { csv, autoType, groups, extent } from 'd3';

const dataPath = ".\BigGardenWatch_2022-2025_top10.csv"


export const data = readable([], set => {
  csv(dataPath, autoType).then(d => set(d));
});

