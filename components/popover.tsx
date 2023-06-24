import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";

interface Note {
  staff_name: string;
  note: string;
}

interface PopoverProps {
  notes: Array<Note>;
}

const Hover = ({ notes }: PopoverProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover placement="bottom" open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <div className="grid grid-cols-2 border p-2">
          <span className="">{notes[notes.length - 1].staff_name}</span>
          <span className="text-right">{notes[notes.length - 1].note}</span>
        </div>
      </PopoverHandler>
      <PopoverContent {...triggers} className="w-[28rem]">
        {notes.map((note, iNote) => (
          <div key={iNote}>
            {iNote > 0 && <hr className="mt-1 border-dashed" />}
            <div className="grid grid-cols-2 p-2">
              <span className="">{note.staff_name}</span>
              <span className="text-right">{note.note}</span>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Hover;
