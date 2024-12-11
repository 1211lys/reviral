// "use client";

// import { GetCampaignList } from "@/service/list";
// import { useInfiniteQuery } from "react-query";
// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import { GetCampaignListRequest } from "@/types/list";

// export default function Test() {
//   const { ref, inView } = useInView();

//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
//     useInfiniteQuery(
//       "campaigns", // 쿼리 키
//       async ({ pageParam = 0 }) => {
//         const params: GetCampaignListRequest = {
//           category: "today",
//           platform: "nv",
//           status: "progress",
//           page: pageParam,
//           size: 15,
//         };
//         const response = await GetCampaignList(params);
//         return response.data.data; // API 응답의 데이터 반환
//       },
//       {
//         getNextPageParam: (lastPage, allPages) => {
//           // 마지막 페이지에 따라 다음 페이지를 결정
//           const currentPage = allPages.length - 1;
//           const totalItems = lastPage?.data?.length ?? 0;
//           return totalItems === 15 ? currentPage + 1 : undefined; // 15개 단위로 페이지네이션
//         },
//       }
//     );

//   // 뷰포트에 들어오면 다음 페이지 로드
//   useEffect(() => {
//     if (inView && hasNextPage) {
//       fetchNextPage();
//     }
//   }, [inView, hasNextPage, fetchNextPage]);

//   // 데이터 상태별 UI 처리
//   if (status === "loading") return <div>Loading...</div>;
//   if (status === "error") return <div>Something went wrong</div>;
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* 데이터 렌더링 */}
//         {data?.pages.map((page, pageIndex) => (
//           <div key={pageIndex}>
//             {page.data.map((campaign) => (
//               <div
//                 key={campaign.campaignId}
//                 className="bg-white p-4 shadow rounded-lg"
//               >
//                 <h2 className="text-lg font-bold">{campaign.campaignTitle}</h2>
//                 <p>Price: {campaign.campaignPrice}</p>
//                 <p>Point: {campaign.campaignPoint}</p>
//                 <p>Total: {campaign.totalCount}</p>
//                 <p>Join: {campaign.joinCount}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div ref={ref} className="h-10">
//         {/* 무한 스크롤 상태 */}
//         {isFetchingNextPage && <p>Loading more...</p>}
//       </div>
//     </>
//   );
// }
