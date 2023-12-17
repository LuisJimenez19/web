function SkeletonImage() {
  return (
    <div className=" flex-1 relative flex items-center justify-center">
      <div className=" rounded-md h-64 w-10/12 skeleton"></div>
      <div className=" rounded-md w-3/12 h-56 absolute right-0 -bottom-5 md:bottom-5 skeleton"></div>
    </div>
  );
}

export { SkeletonImage };
