export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head: ListNode = new ListNode(0);
    let current: ListNode = head;
    let carry: number = 0;
    while (l1 != null || l2 != null || carry != 0) {
        const sum: number = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);

        if (l1 != null) {
            l1 = l1?.next;
        }
        if (l2 != null) {
            l2 = l2?.next;
        }
    }

    return head.next;
}
