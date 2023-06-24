import Badge from "./badge";
import Hover from "./popover";

interface Note {
  staff_name: string;
  note: string;
}

interface BoxProps {
  id: number;
  fullname: string;
  stage: string;
  notes: Array<Note>;
  children?: JSX.Element;
}

const Box = ({ id, fullname, stage, notes, children }: BoxProps) => {
  return (
    <div className="border p-4 mb-4">
      <div className="grid grid-cols-2">
        <span>{fullname}</span>
        <Badge name={stage} />
      </div>
      <div className="grid grid-cols-2 mt-4">
        {notes.length > 0 ? <Hover notes={notes} /> : <div />}
        {children}
      </div>
    </div>
  );
};

export default Box;
