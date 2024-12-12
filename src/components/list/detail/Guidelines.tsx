import React from "react";

const PROCEED_LIST = [
  {
    key: 0,
    title: "Step 01. 캠페인 신청",
    item1:
      "Step 01-1. 캠페인 링크를 복사하여 해당 캠페인 상품이 정상적인 링크인지 1차 확인해주세요.",
    item2:
      "Step 01-2. 캠페인의 옵션을 선택해서 해당 캠페인 참여 신청을 완료해 주세요 ( 남은 캠페인의 개수를 확인하고 남아있는 캠페인의 목록으로 신청해주세요.)",
  },
  {
    key: 1,
    title: "Step 02. 캠페인 참여",
    item1:
      "Step 02-1. 캠페인 신청 옵션과 동일하게 설정하여 제품을 해당 스토어에서 구매해 주세요.",
    item2:
      "Step 02-2. 캠페인의 주문 번호와 구매정보 캡처 이미지를 등록해 주세요.",
    item3:
      "Step 02-3. 구매 후, 5-7일 이내에 구매평을 해당 스토어에 작성해 주세요.",
    item4: "Step 02-4. 작성한 스토어의 구매평 캡처 이미지를 등록해 주세요.",
  },
  {
    key: 2,
    title: "Step 03. 캠페인 완료",
    item1:
      "Step 03-1. 모두 완료가 되면, 담당자 검수 이후에 영업일 기준 1-2일 내 포인트가 지급됩니다.",
  },
];

const PRECAUTIONS = [
  {
    key: 0,
    text: "※ 해당 캠페인 참여 이후, 1-2일 내 개인 경비를 사용하여 직접 선구매를 진행해 주셔야 합니다 ※",
  },
  {
    key: 1,
    text: "셀러가 지정한 요청사항을 꼭 확인하여 진행해 주세요.",
  },
  {
    key: 2,
    text: "본인 사유로 구매가 늦어진 경우, 캠페인 진행에서 선정되었더라도 참여 누락될 수 있습니다.",
  },
  {
    key: 3,
    text: "포인트 전환 시, 본인 명의가 아닌 경우 포인트 전환에 제한이 있을 수 있습니다.",
  },
  {
    key: 4,
    text: "포인트 출금 시, 3만원 이상일 경우 3.3%의 세금이 발생합니다.",
  },
  {
    key: 5,
    text: "포인트 전환은 영업일 기준 11-23시까지 매 시 1시간 마다 당일 전환이 가능합니다.",
  },
  {
    key: 6,
    text: "해당 캠페인은 출금 시 발생하는 세금(3.3%)을 지원하지 않습니다.",
  },
];

export default function Guidelines() {
  return (
    <div className="p-10 max-w-[1440px] mx-auto ">
      <div className="flex items-center gap-10 border-b pb-5 mb-5">
        <h1 className="font-semibold text-xl">안내 사항</h1>
        <p className="text-sm text-gray-600">
          안내사항을 주의깊게 보고 캠페인을 진행해 주세요
        </p>
      </div>
      <div className="bg-bgGuidelines text-center py-10 mb-5 px-10">
        <h1 className="font-semibold text-lg mb-2">
          본 캠페인은 <span className="text-red-600">구매평 체험단</span>입니다.
        </h1>
        <p className="mb-6">
          캠페인 참여 이후 개인 경비로 직접 상품을 구매해야 하며 페이백 형태로
          진행됩니다.
        </p>
        <p className="font-semibold underline underline-offset-4">
          ※ 해당 캠페인 참여 이후, 1-2일 내 개인 경비를 사용하여 직접 선구매를
          진행해 주셔야 합니다 ※
        </p>
      </div>
      <div className="flex items-center gap-10 border-b pb-5 mb-5">
        <h1 className="font-semibold text-xl">진행 방법</h1>
        <p className="text-sm text-gray-600">
          진행 방법에 따라 캠페인을 진행해 주세요.
        </p>
      </div>
      <div>
        {PROCEED_LIST.map((item) => (
          <div key={item.key}>
            <h1 className="font-medium text-lg pl-4 my-4">{item.title}</h1>
            <div className="text-sm pl-8 mb-8">
              <p>{item.item1}</p>
              <p>{item.item2}</p>
              <p>{item.item3}</p>
              <p>{item.item4}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10 border-b pb-5 mb-5">
        <h1 className="font-semibold text-xl">유의 사항</h1>
        <p className="text-sm text-gray-600">꼭 확인해 주세요!</p>
      </div>
      <div className="bg-bgGuidelines py-6 px-10 flex flex-col gap-2">
        {PRECAUTIONS.map((item) => (
          <p key={item.key}>
            {item.key + 1}.{" "}
            <span className="font-semibold underline underline-offset-4">
              {item.text}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
