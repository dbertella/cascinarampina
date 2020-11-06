import dayjs from "dayjs";
import "dayjs/locale/it";

dayjs.locale("it");

type Props = {
  dateString: string;
};

export default function Date({ dateString }: Props) {
  const date = dayjs(dateString);
  return (
    <time dateTime={dateString}>{date.format("D MMMM YYYY")}</time>
  );
}
