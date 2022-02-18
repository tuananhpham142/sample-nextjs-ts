import { ShadowSize } from "@/models/interfaces/globalInterface";
import { trimmedTextByCharacters } from "@/utils/string.utils";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import CommentAndReaction from "../CommentAndReaction";

const useStyles = makeStyles<Theme, FeedItemProps>((theme: Theme) => ({
  ellipsis: {
    float: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
}));

const desc = `TIPS SINH TỒN TẠI NƠI CÔNG SỞ DÀNH CHO SINH VIÊN MỚI RA TRƯỜNG
—————————
Dịch bởi Đi Làm Đừng Đi Lầm | Bài viết thuộc quyền sở hữu của dịch giả và chỉ được đăng tải tại Weibo Việt Nam, vui lòng không tự ý repost.
—————————
Tính đến nay cũng đã được gần 4 năm kể từ thời điểm tốt nghiệp đại học, tôi đã từng làm việc ở các công ty nằm trong danh sách Fortune 500 và cũng đã từng làm việc tại các công ty quy mô nhỏ chỉ vài chục người.
Hiện tại tôi đang là giám đốc của một công ty làm về mảng Internet. Tôi đã cô đọng tất cả các kiến thức tại nơi làm việc của mình thành 10 điều dưới đây. Hy vọng rằng những điều này có thể giúp mọi người tránh được việc phải đi đường vòng trong vài năm làm việc.
1. Khi sếp giao nhiệm vụ, hãy hỏi ngay tại chỗ nếu chưa nắm rõ vấn đề
Trước tiên, bạn có thể nói về hiểu biết, cách nghĩ của mình đối với vấn đề và nhờ sếp xác minh xem cách hiểu như vậy có chính xác không, sau đó mới bắt đầu thực hiện nhiệm vụ.
Nếu bạn không trình bày rõ ràng ngay từ đầu mà đợi đến khi phát sinh rắc rối mới vội vã xin ý kiến thì sẽ để lại ấn tượng không tốt với cấp trên bởi bạn đang làm lãng phí thời gian của họ.
2. Đồng bộ hóa tiến độ công việc với sếp của bạn
Nhiều người trong chúng ta thường xem nhẹ tầm quan trọng của việc đồng bộ hóa tiến độ ở nơi làm việc. Miễn là sếp không hỏi tới thì họ sẽ không nói, không cập nhật tiến độ công việc của mình.
Vì sao chúng ta nên đồng bộ hóa tiến độ công việc với sếp của mình mọi lúc?
Môi trường kinh doanh luôn không ngừng biến đổi và các lãnh đạo cần phải đưa ra quyết định phù hợp bằng cách nắm bắt được những thông tin mới nhất một cách kịp thời. Đây chính là “Tư duy hệ thống”.
Những người làm tốt, hoàn thành xuất sắc những việc quan trọng sẽ được cấp trên ưu ái, ưu tiên và trao cho nhiều cơ hội thăng tiến hơn. Đây chính là “Hiệu ứng Matthew”.
Nếu lãnh đạo cấp cao đột nhiên hỏi sếp của bạn về tiến độ của một việc nào đó nhưng anh ấy không thể trả lời; Hoặc khi có chuyện ngoài ý muốn xảy ra, mọi người đều biết chuyện nhưng sếp của bạn thì lại chẳng hay biết gì, hậu quả của điều này chắc hẳn bạn sẽ rõ hơn ai hết. Đây chính là “Nguyên tắc có đi có lại”.
Dưới đây là 2 phương pháp cụ thể mà mọi người có thể tham khảo:
Công việc hằng ngày nên định tính (xác định tính chất của vấn đề) trước rồi mới định lượng. Khi bắt đầu nên trao đổi với sếp xem hướng đi đã đúng hay chưa; Tiếp đến là trao đổi với sếp xem khối lượng công việc đã hoàn thành là bao nhiêu phần trăm; Sau cùng là báo cáo kết quả công việc và đề xuất ý kiến để cải thiện hiệu suất làm việc.
Trong trường hợp đặc biệt hoặc khẩn cấp, hãy cập nhật thông tin và báo cáo ngay lập tức.
3. Theo sát công việc được giao (FOLLOW UP)
Khi được triển khai những dự án mang tầm vĩ mô với độ khó cao, nhân viên thường có xu hướng trì hoãn và chờ đợi. Do đó, tình trạng tổn thất, hỗn loạn xảy ra là điều khá phổ biến ở các công ty.
Cách xử lý của những nhân viên xuất sắc là chủ động theo sát và buộc mọi thứ phải xảy ra theo đúng quỹ đạo. Công ty là một hệ thống, nếu bạn không nỗ lực để sự việc diễn ra theo ý muốn thì mọi thứ gần như sẽ không thành công bởi vì những người khác sẽ cạnh tranh, tranh giành các nguồn lực, cơ hội của hệ thống này.
4. Tách biệt công việc và cuộc sống, cân bằng giữa công việc và cuộc sống
Đừng mang những cảm xúc tồi tệ trong công việc vào cuộc sống của bạn. Đồng thời cũng không mang những điều tiêu cực trong cuộc sống vào công việc. Đây chính là biểu hiện cho sự chuyên nghiệp của bạn.
Công ty là nơi làm việc, khi một cá nhân bị gắn mác xấu thì sẽ rất khó để có thể thay đổi ấn tượng với những người khác. Hơn thế nữa, không ai thích làm việc với những người thường xuyên có cảm xúc tiêu cực.
Đối với công ty, những cảm xúc tiêu cực của nhân viên là một nhân tố xấu bởi nó ảnh hưởng đến mối quan hệ giữa mọi người và cuối cùng nó sẽ như một chiếc boomerang ảnh hưởng đến chính bản thân bạn.
5. Chủ động học hỏi trong công việc - chủ động chiến đấu - chủ động để trưởng thành
Những kẻ láu lỉnh thường có tâm lý “trả bao nhiêu, làm bấy nhiêu”. Nhưng suy cho cùng, ai sẽ là người phải chịu thua thiệt? Hãy nghĩ về những gì bạn có thể mang theo khi rời khỏi công ty trong tương lai, bạn sẽ có câu trả lời.
Hãy học hỏi ở nơi làm việc. Công ty cũng tương đương với nơi bạn bỏ tiền ra học, có thể học bao nhiêu thì cố gắng học bấy nhiêu. Nếu có bất kỳ ý tưởng, ý kiến gì bạn có thể tận dụng tài nguyên của công ty để nhanh chóng kiểm chứng. Điều này sẽ giúp bạn dần dần nâng cao năng lực của bản thân, chờ đợi thời cơ thích hợp để phát huy hết khả năng của mình.
6. Công thức của năng lực: TÂM THẾ x GIAO TIẾP x KỸ NĂNG
Làm việc dưới áp lực cao mà không suy sụp, kiệt sức là một khả năng có lợi thế cạnh tranh rất cao. Loại khả năng này có thể được hình thành nếu bạn cố gắng rèn luyện, trong đó, tâm thế là yếu tố không thể thiếu trong giá trị khả năng.
Năng lực không chỉ là một kỹ năng. Vận động sự giúp đỡ của người khác thông qua việc giao tiếp để hoàn thành nhiệm vụ cũng là một biểu hiện của năng lực cá nhân. Cấp trên chỉ quan tâm đến kết quả cuối cùng, còn quá trình thực hiện thì phải dựa vào khả năng giao tiếp, các mối quan hệ của bạn.
7. Khi gặp phải những quan điểm, ý kiến trái chiều, hãy nghĩ rằng nó thú vị và đừng vội tranh cãi về tính đúng sai
Trước tiên hãy giả định rằng những quan điểm, ý kiến này hữu ích với bạn, sau đó hãy phân tích những thiếu sót có thể có và cải thiện nó. Trên thực tế, nhiều bất đồng chỉ là sự tranh chấp giữa các nhận thức khác nhau và nó không dẫn đến kết quả nào cả.
8. Giải thích rõ quan điểm của bạn trong vòng 1 phút
Thời gian của mỗi người đều quý giá, không ai thích những cuộc nói chuyện dài mà không nói ra được điểm then chốt. Để đảm bảo việc sử dụng hiệu quả thời gian của đối tác, hãy học cách “nén” ý kiến của mình xuống dưới 1 phút. Để làm được điều này, trước tiên chúng ta phải nêu kết luận và sau đó mới trình bày lí do.
9. Không có năng lực thì sẽ có áp lực
Đừng nghĩ rằng bạn chỉ vừa tốt nghiệp đại học và còn rất trẻ, vì thế mà không chăm chỉ làm việc. Hãy nhớ rằng nếu không có năng lực, bạn sẽ bị đào thải.
Năng lực là nền tảng của cuộc đời. Nếu muốn được thăng chức thì năng lực của bạn phải thuyết phục được cấp trên.
10. Đối nhân xử thế
Về cơ bản, bạn phải biết cách đối nhân xử thế và không làm mất lòng mọi người, đây không chỉ là điều kiện cần để hoàn thành công việc, mà còn là “chất bôi trơn” để thăng tiến.
Lãnh đạo sẽ không thăng chức cho một người không thể làm tốt trong các mối quan hệ cá nhân của họ.
———
Nguồn:
https://www.zhihu.com/answer/284147370`;

interface FeedItemProps {
  className?: string;
  address: string;
  url: string;
  id: string;
  shadow?: ShadowSize;
  commentSticky?: boolean;
  bodyClassName?: string;
}

const FeedItem: FunctionComponent<FeedItemProps> = (props: FeedItemProps) => {
  const { className, address, url, id, shadow, commentSticky, bodyClassName } =
    props;
  const classes = useStyles(props);
  const [viewAll, setViewAll] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className={`card card-custom shadow-${shadow}`}>
      <div className={clsx("card-body p-0", bodyClassName)}>
        {/* BEGIN: Card Header */}
        <div className="d-flex align-items-center mb-3">
          <CustomSimpleCard
            circle
            imgUrl="https://images.unsplash.com/photo-1621539208013-3b35b4b6235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            action={
              <CustomButton
                id="somebutton"
                height={100}
                size="xs"
                onClick={() => {
                  console.log("Execute Function");
                }}
                isLoading={false}
                variant={"outline"}
                color={"light-warning"}
                title={"Theo dõi"}
              />
            }
            title={"Nhà hàng Thanh Mai"}
            subtitle={"@di.khap.ha.noi"}
            titleLine={1}
          />
        </div>
        {/* END: Card header */}
        {/* BEGIN: Card content */}
        <div className="d-flex flex-column">
          {/* BEGIN: Checkin place */}
          {/* <div className='d-flex flex-wrap justify-content-center'>
                        <div className='me-12 d-flex flex-column mb-2 w-100'>
                            <span className='d-block text-center'>
                                <Typography
                                    onClick={() =>
                                        router.push({
                                            pathname: url,
                                            query: { placeId: id },
                                        })
                                    }
                                    className='text-primary text-hover-primary fw-bold fs-5'
                                >
                                    {address}
                                </Typography>
                            </span>
                        </div>
                        <div className='me-12 d-flex flex-column mb-2 w-100'>
                            <span className='d-block text-center'>
                                <Typography variant='body1' className='fw-bold fs-6'>
                                    2 ngày, 2 Địa điểm
                                </Typography>
                            </span>
                        </div>
                    </div> */}
          {/* END: Checkin place */}

          {/* BEGIN: Image layout */}
          {/* END: Image layout */}

          {/* BEGIN: Content */}
          <Typography variant="body1" className="mb-5">
            {viewAll ? desc : trimmedTextByCharacters(desc, 255)}

            {!viewAll && desc.length > 255 && (
              <span
                className="text-hover-primary text-primary fw-bold hoverable"
                onClick={() => setViewAll(!viewAll)}
              >
                Xem thêm
              </span>
            )}
          </Typography>
          {/* END: Content */}
        </div>
        {/* END: Card content */}
        {/* Begin: React and Comment */}
        <CommentAndReaction commentSticky />
        {/* END: React and Comment */}
      </div>
    </div>
  );
};

FeedItem.defaultProps = {
  shadow: "xs",
};

export default FeedItem;
