const BulkActionBar = ({ selectedCount, onClear }) => {
  if (!selectedCount) return null;

  return (
    <div className="flex justify-center py-4">
      <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
        {selectedCount} items selected
        <button onClick={onClear} className="ml-2 text-xs hover:underline">✕</button>
      </div>
    </div>
  );
};

export default BulkActionBar;
