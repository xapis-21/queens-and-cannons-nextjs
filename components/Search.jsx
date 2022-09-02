
import FormGroup from './FormGroup'

const Search = ({handleSearch}) => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col items-center pb-2 pt-14 px-2">
      <h1 className="text-2xl font-[500] mb-4">
        WHAT ARE YOU LOOKING FOR
      </h1>
      <FormGroup
        isrequired
        type={"email"}
        addCss={"col-span-2"}
        holder={"Type search keyword or country"}
        handleChange={handleSearch}
      />
      
    </div>
  );
}

export default Search