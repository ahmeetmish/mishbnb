'use client'

import Select from "react-select"

import useCountries from "@/app/hooks/useCountries"

export default function CountrySelect({ value, onChange }) {
  const { getAll } = useCountries()

  return (
    <div>
      <Select placeholder='Ülkenizi seçin' isClearable onChange={(selectedValue) => onChange(selectedValue)} value={value} options={getAll()} formatOptionLabel={(option) => (
        <div className="gap-3 flex flex-row items-center">
          <div>
            {option.label},
            <span className="ml-1 text-neutral-800">
              {option.region}
            </span>
          </div>
        </div>
      )} classNames={{
        control: () => 'p-3 border-2',
        input: () => 'text-lg',
        option: () => 'text-lg'
      }} theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#e4ebff'
        }
      })} />
    </div>
  )
}