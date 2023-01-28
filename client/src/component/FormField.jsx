import React from 'react';

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handelChange,
    isSurpriseMe,
    handelSurpriseMe
}) => {
    return (
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                >
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handelSurpriseMe}
                        className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded text-black"
                    >
                        Surprise me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handelChange}
                required
                className="bg-gray-50 border border-gray-100 text-gray-900  p-3 rounded-lg block w-full focus:border-[#4649ff] focus:ring-[#4649ff] focus:focus-visible:outline-none"
            />
        </div>
    );
};

export default FormField;
