const twoSum = (nums, target) => {
  let temp = {};
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (temp.hasOwnProperty(rem)) {
      return [nums[temp[rem]], nums[i]];
    }
    temp[nums[i]] = i;
  }
  return false;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
