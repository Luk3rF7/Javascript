const nums1 = [1,2,3]
const nums2 = [4,5,6]
const nums3 = nums1.concat(nums2,[7,8,9], 'Concatenado..')
const nums4 = [...nums1,...nums3]
console.log(nums3);
console.log(nums4);