const isValidBST = (root) => {
  const validate = (root, min, max) => {
    if (root === null) return true;
    if (root.val >= max || root.val <= min) return false;
    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  };
  return validate(root, -Infinity, Infinity);
};
