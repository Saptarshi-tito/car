"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newlimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newlimit}`);

    router.push(newPathName);
  };
  
  return (
    <div className="w-full flex-center gap-5 mt-10">
      <CustomButton
        title="Show More"
        btnType="button"
        containerStyles="bg-primary-blue rounded-full text-white px-2 py-1"
        handleClick={handleNavigation}
      />
    </div>
  );
};

export default ShowMore;
