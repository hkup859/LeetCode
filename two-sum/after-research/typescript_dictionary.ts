// Complexity: _
// Runtime: 0ms 56.5MB (Beats 100%)

function twoSum(nums: number[], target: number): number[] {
    const dict: { [key: number]: number; } = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in dict) {
            return [dict[target-nums[i]], i];
        }
        dict[nums[i]] = i;
    }
};