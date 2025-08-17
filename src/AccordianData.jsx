const accordionData = [
  {
    title: "About Us",
    content: "We are a passionate team building innovative solutions."
  },
  {
    title: "Services",
    content: (
      <ul className="list-disc list-inside">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Cloud & DevOps</li>
      </ul>
    )
  },
  {
    title: "FAQs",
    content: (
      <div>
        <p><strong>Q:</strong> Do you offer free trials?</p>
        <p><strong>A:</strong> Yes, we offer a 14-day free trial.</p>
      </div>
    )
  }
];


export default accordionData;