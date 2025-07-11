// Running this got me everything from 1ms to 6ms (LeetCode performance is clearly not reliable)
// Runtime: 1ms (Beats 99.91%)
// Memory: 61.81MB (Beats 78.20%)

// Heavily copied from copied/carryover_optimized.ts

// My small tweak was short-circuiting the while logic by changing the ORs into ANDs, allowing the logic to stop at the first false value (which is early most of the time). I then execute based on the opposite of that value.

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let temp = dummy;
    let carry = 0;

    let shouldStop = l1 === null && l2 === null && carry === 0
    
    while (!shouldStop) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

        shouldStop = l1 === null && l2 === null && carry === 0
    }
    
    return dummy.next;
}