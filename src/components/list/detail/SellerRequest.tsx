import React from "react";

interface Props {
  sellerRequest: string;
}

const SellerRequest: React.FC<Props> = ({ sellerRequest }) => {
  return (
    <div className="border border-gray-400 mb-6">
      <h2 className="border-b border-gray-200 p-4 md:p-6 md:py-4 text-xl font-semibold">
        셀러 요청사항
      </h2>
      <div
        className="seller-request p-2 md:p-4"
        dangerouslySetInnerHTML={{ __html: sellerRequest }}
      />
    </div>
  );
};

export default SellerRequest;
