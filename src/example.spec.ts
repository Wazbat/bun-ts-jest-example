// import { domExample } from './example'
import { describe, it, expect } from '@jest/globals';
import jsdom from 'jsdom';

describe('index file', () => {
    it('should export a string', () => {
        expect('not a jsdom instance').toBeInstanceOf(jsdom.JSDOM);
    })
})