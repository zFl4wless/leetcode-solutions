import { addTwoNumbers, ListNode } from './add-two-numbers';

/**
 * Creates a Linked List from an array which makes writing testing cases easier.
 *
 * @param arr The array to create the linked list from.
 * @returns The linked list.
 */
function createListNodeFromArray(arr: number[]): ListNode | null {
    function createListNodeFromArrayHelper(arr: number[], index: number): ListNode | null {
        if (index === arr.length) {
            return null;
        }
        return new ListNode(arr[index], createListNodeFromArrayHelper(arr, index + 1));
    }

    const list = createListNodeFromArrayHelper(arr, 0);
    return list;
}

describe('Should sum two numbers from linked list in reverse order and return the result in a linked list', () => {
    it('Should return [7, 0, 8] when given [2, 4, 3] and [5, 6, 4]', () => {
        const l1 = createListNodeFromArray([2, 4, 3]);
        const l2 = createListNodeFromArray([5, 6, 4]);
        const result = createListNodeFromArray([7, 0, 8]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
    it('Should return [0] when given [0] and [0]', () => {
        const l1 = createListNodeFromArray([0]);
        const l2 = createListNodeFromArray([0]);
        const result = createListNodeFromArray([0]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
    it('Should return [8, 9, 9, 9, 0, 0, 0, 1] when given [9, 9, 9, 9, 9, 9, 9] and [9, 9, 9, 9]', () => {
        const l1 = createListNodeFromArray([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createListNodeFromArray([9, 9, 9, 9]);
        const result = createListNodeFromArray([8, 9, 9, 9, 0, 0, 0, 1]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
});
