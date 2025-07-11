// Complexity: _
// Runtime: 0ms (Beats 100%)
// Memory: 56.51MB (Beats 63.47%)

function twoSum(nums: number[], target: number): number[] {
    const dict: { [key: number]: number; } = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in dict) {
            return [dict[target-nums[i]], i];
        }
        dict[nums[i]] = i;
    }
};