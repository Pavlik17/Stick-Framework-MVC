import Data from '../Data';

const data = new Data();

describe('State test', () => {
    it('get State', () => {
        expect(data.getState('currency', 'value')).toEqual({ '$ US Dollar': 'USD', '€ Euro': 'EURO' });
    });

    it('set State', () => {
        expect(data.setState('name', 'Vlad')).toBe('Vlad');
    });

    it('set State', () => {
        expect(data.removeState('Vlad')).toBe(true);
    });
});