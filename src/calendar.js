import { DateInput } from "@pimq.tech/semantic-ui-calendar-react-modified";

export const Calendar = () => {
  return (
    <DateInput
      inline
      name="datesRange"
      dateFormat="YYYY-MM-DD"
      initialDate={new Date()}
      value={"1990-01-01"}
      onChange={() => {}}
      localization="zh-tw"
    />
  );
};
