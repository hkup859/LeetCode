// Complexity: O(N^2)
// Runtime: 12ms (Beats 35.25%)
// Memory: 2.3 MB (Beats 79.07%)
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let length: usize = nums.len();
        let mut returnVal: Vec<i32> = vec![0, 0];
        'outer: for i in 0..length {
            'inner: for k in i+1..length {
                if nums[i] + nums[k] == target {
                    returnVal = vec![i as i32,k as i32];
                    break 'outer;
                    break 'inner;
                } 
            }
        }
        return returnVal;
    }
}
