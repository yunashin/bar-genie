import { ReactElement, useCallback, useState } from "react";

type DropdownProps = {
  children: ReactElement;
  onChange: Function;
  onOpenChange: (showDropdown: boolean) => void;
  options: {
    name: string;
    value: string;
  }[];
  selectedOptions: string[];
  showDropdown: boolean;
  setShowDropdown: (showDropdown: boolean) => void;
}

const MultiSelect = ({ children, onChange, onOpenChange, options, selectedOptions, showDropdown, setShowDropdown }: DropdownProps) => {
  const [shouldStyleIcon, setShouldStyleIcon] = useState(showDropdown);
  const toggleDropdown = () => {
    if (!showDropdown) {
      onOpenChange(!showDropdown);
    }
  };

  const renderOption = useCallback((option: { name: string; value: string; }, index: number) => {
    const checked = selectedOptions.includes(option.value);
    return (
      <p key={index} onClick={() => onChange(option.value)}>
        <input type="checkbox" checked={checked} onChange={() => { }} />
        {option.name}
      </p>
    )
  }, [onChange, selectedOptions]);

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
      setShouldStyleIcon(false);
    }
  };

  return (
    <>
      <button
        className={showDropdown ? "active" : undefined}
        onClick={toggleDropdown}
        onBlur={dismissHandler}
        onMouseOver={() => setShouldStyleIcon(true)}
        onMouseLeave={() => {
          if (!showDropdown) {
            setShouldStyleIcon(false)
          }
        }}
      >
        <div className="flex align-center">
          {children}
          {<svg className="m-left-4" xmlns="http://www.w3.org/2000/svg" height="1em" style={{ top: '20px', fill: shouldStyleIcon ? 'white' : '' }} viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>}
        </div>
        {showDropdown && (
          <>
            <div className={showDropdown ? "dropdown" : "dropdown active"}>
              {options.map((option, index) => {
                return renderOption(option, index);
              })}
            </div>
          </>
        )}
      </button>
    </>
  )
}

export default MultiSelect;
