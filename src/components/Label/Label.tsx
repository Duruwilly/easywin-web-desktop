const Label = ({
  label,
}: //   isRequired,
{
  label: string;
  isRequired?: boolean;
}) => {
  return (
    <div className="flex flex-row items-center">
      <p className="font-medium text-white text-xs">{label}</p>
      {/* {isRequired && <span className="text-brand-600">*</span>} */}
    </div>
  );
};

export default Label;
