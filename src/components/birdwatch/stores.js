// @ts-nocheck
import { readable } from 'svelte/store';
import { csv, autoType } from 'd3'

const dataPath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmOGtlrqcibK2c_g5PN1kMILsaWij8CQ46KXyL6Pj1Ue-fdAO5NEio4glVZ-rztRk_vhzZdcsKggA4/pub?output=csv"

export const data = readable([], set => {
  csv(dataPath, autoType).then(d => set(d));
});