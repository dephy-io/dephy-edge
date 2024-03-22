export const NAME_STORAGE = 'dephy_kv';
export const NAME_PROCESSED_TS = 'processed_ts';

export const CONST_TIME_ONE_HOUR = 60 * 60;

export const NOSTR_RELAY_URL = process.env.NOSTR_RELAY_URL || 'wss://poc-relay.dephy.cloud/';
export const NOSTR_START_TIME = parseInt(process.env.NOSTR_START_TIME) || 1710864000; // Tue Mar 19 2024 16:00:00 GMT+0000