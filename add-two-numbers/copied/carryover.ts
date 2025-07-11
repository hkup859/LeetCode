// NOT MY SOLUTION

// Runtime: 4ms (Beats 53.77%)
// Memory: 62.25MB (Beats 54.71%)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carryOver:number = 0): ListNode | null {
    if (l1 === null && l2 === null){
        return (carryOver === 0) ? null : new ListNode(carryOver);
    }
    
    const currentSum = (l1?.val || 0) + (l2?.val || 0) + carryOver;
    return new ListNode(
		currentSum % 10, 
		addTwoNumbers(
			l1?.next||null, 
			l2?.next||null, 
			(currentSum/10) >> 0 // slightly faster than Math.floor(currentSum/10)
		)
	);
}