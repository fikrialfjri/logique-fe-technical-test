import CurrencyDollarIcon from "@/assets/icons/currency-dollar.svg?react";

const MusicCard = ({ title, artist, thumbnail, genre, price }) => {
  return (
    <div className="py-3 px-[10px] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] flex gap-3 rounded-[10px]">
      <img src={thumbnail} alt="Thumbnail" className="w-[100px] h-[100px] object-cover rounded-[10px]" />
      <div className="flex flex-col justify-between w-full">
        <div className="text-[#334155]">
          <p className="text-[10px] font-medium">{artist}</p>
          <h3 className="text-sm font-bold">{title}</h3>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="py-1 px-[13px] rounded-full bg-[#10b981] text-white text-[10px] font-medium">
            <span>{genre}</span>
          </div>
          {price && (
            <div className="flex items-center gap-[6px] text-[#f5b014]">
              <CurrencyDollarIcon />
              <span className="text-xs font-bold">{price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
