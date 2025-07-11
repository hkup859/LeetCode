// Complexity: _
// Runtime: 29ms (Beats 39.64%)
// Memory: 56.03MB (Beats 82.89%)
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let k = i+1; k < nums.length; k++) {
            if((nums[i] + nums[k]) === target) return [i,k]
        }
    }
};