// Complexity: _
// Runtime: 0ms 2.35 MB (Beats 100%)
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let length: usize = nums.len();
        let mut dict: HashMap<i32, i32> = HashMap::new();
        let mut returnVal: Vec<i32> = vec![-1, -1];
        for i in 0..length {
            let diff: i32 = target - nums[i];
            if dict.contains_key(&diff) {
                returnVal = vec![*dict.get(&diff).unwrap_or(&0), i.try_into().unwrap()];
                break;
            }
            dict.insert(nums[i], i.try_into().unwrap());
        }
        return returnVal;
    }
}