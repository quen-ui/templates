import { useState } from "react";
import { Button, TextField, Tooltip } from "@quen-ui/components";
import { IconSearch, IconEyeOff } from "@tabler/icons-react";

interface ISearchHeaderProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
}
const SearchHeader = ({ defaultValue, onChange }: ISearchHeaderProps) => {
  const [value, setValue] = useState(defaultValue);
  const [show, setShow] = useState(false);

  const handleChange = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  if (show) {
    return (
      <TextField
        onChange={handleChange}
        value={value}
        autoFocus={true}
        placeholder="Search"
        rightContent={
          <Tooltip text="Hide" position="bottom">
            <Button view="icon" size="xs" onClick={() => setShow(false)}>
              <IconEyeOff width={16} />
            </Button>
          </Tooltip>
        }
      />
    );
  }
  return (
    <Button
      view="secondary"
      size="m"
      leftContent={<IconSearch />}
      onClick={() => setShow(true)}>
      Search
    </Button>
  );
};

export default SearchHeader;
