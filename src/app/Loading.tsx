export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed bg-white top-0 z-10">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
