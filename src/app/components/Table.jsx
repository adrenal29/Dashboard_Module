'use client'
import React, { useState } from 'react';

const Table = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState({});

  const handleTagSelect = (event, id) => {
    const selectedTag = event.target.value;
    setSelectedTags((prevTags) => {
      const updatedTags = { ...prevTags };

      
      if (updatedTags[id]) {
        updatedTags[id] = [...updatedTags[id], selectedTag];
      } else {
        
        updatedTags[id] = [selectedTag];
      }

      return updatedTags;
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="overflow-x-auto">
        <table className="min-w-full border table p-2">
          <thead className='p-10'>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Links</th>
              <th className="py-2 px-4 border-b">Prefix</th>
              <th className="py-2 px-4 border-b">Select Tags</th>
              <th className="py-2 px-4 border-b">Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className=" text-center bg-white">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4"><a href={item.links} style={{color:"blue",'text-decoration':'underline'}}>{item.links}</a></td>
                <td className="py-2 px-4">{item.prefix}</td>
                <td className="py-2 px-4">
                  <select
                    onChange={(event) => handleTagSelect(event, item.id)}
                    value="" 
                    className="border border-gray-300 rounded p-1 w-full md:w-auto"
                  >
                    <option value="" disabled hidden>Select Tags</option>
                    {item.selectTags.split(', ').map((tag, index) => (
                      <option key={index} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4">
                  {selectedTags[item.id] &&
                    selectedTags[item.id].map((tag, index) => (
                      <span key={index} className="inline-block  p-1 rounded m-1 tag">
                        {tag}
                      </span>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
