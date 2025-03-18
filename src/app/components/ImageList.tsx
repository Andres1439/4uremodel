import Image from "next/image";
import Link from "next/link";

export const ImageList = () => {
  const items = [
    {
      title: "Asphalt paving",
      imageSrc: "/icons/asphalt.png",
      link: "/services/asphalt",
    },
    {
      title: "Assembling",
      imageSrc: "/icons/assembling.png",
      link: "/services/assembling",
    },
    {
      title: "Basement",
      imageSrc: "/icons/basement.png",
      link: "/services/basement",
    },
    // {
    //   title: "Bathroom",
    //   imageSrc: "/icons/bathroom.png",
    //   link: "/services/bathroom",
    // },
    // {
    //   title: "Blacktop",
    //   imageSrc: "/icons/blacktop.png",
    //   link: "/services/blacktop",
    // },
    {
      title: "Carpentry",
      imageSrc: "/icons/carpentry.png",
      link: "/services/carpentry",
    },
    // {
    //   title: "Ceramic-tile",
    //   imageSrc: "/icons/ceramic.png",
    //   link: "/services/ceramic-tile",
    // },
    {
      title: "Commercial work",
      imageSrc: "/icons/commercial.png",
      link: "/services/commercial-work",
    },
    {
      title: "Decks",
      imageSrc: "/icons/decks.png",
      link: "/services/decks",
    },
    // {
    //   title: "Demolition",
    //   imageSrc: "/icons/demolition.png",
    //   link: "/services/demolition",
    // },
    // {
    //   title: "Dormer-extension",
    //   imageSrc: "/icons/dormer.png",
    //   link: "/services/dormer-extension",
    // },
    {
      title: "Drop ceiling",
      imageSrc: "/icons/drop.png",
      link: "/services/drop-ceiling",
    },
    {
      title: "Drywall / sheetrock",
      imageSrc: "/icons/drywall.png",
      link: "/services/drywall",
    },
    {
      title: "Fence",
      imageSrc: "/icons/fence.png",
      link: "/services/fence",
    },
    {
      title: "Flooring",
      imageSrc: "/icons/flooring.png",
      link: "/services/flooring",
    },
    {
      title: "Gutter",
      imageSrc: "/icons/gutter.png",
      link: "/services/gutter",
    },
    {
      title: "Insulation",
      imageSrc: "/icons/insulation.png",
      link: "/services/insulation",
    },
    // {
    //   title: "Kitchen",
    //   imageSrc: "/icons/kitchen.png",
    //   link: "/services/kitchen",
    // },
    // {
    //   title: "Maintenance",
    //   imageSrc: "/icons/maintenance.png",
    //   link: "/services/maintenance",
    // },
    {
      title: "Masonry",
      imageSrc: "/icons/masonry.png",
      link: "/services/masonry",
    },
    {
      title: "Outdoor",
      imageSrc: "/icons/outdoor.png",
      link: "/services/outdoor",
    },
    {
      title: "Painting",
      imageSrc: "/icons/painting.png",
      link: "/services/painting",
    },
    {
      title: "Power Wash",
      imageSrc: "/icons/power.png",
      link: "/services/power",
    },
    // {
    //   title: "Portico",
    //   imageSrc: "/icons/portico.png",
    //   link: "/services/portico",
    // },
    // {
    //   title: "Retaining walls",
    //   imageSrc: "/icons/wall.png",
    //   link: "/services/retaining-walls",
    // },
    {
      title: "Roof",
      imageSrc: "/icons/roof.png",
      link: "/services/roof",
    },
    {
      title: "Shed",
      imageSrc: "/icons/shed.png",
      link: "/services/shed",
    },
    {
      title: "Siding",
      imageSrc: "/icons/siding.png",
      link: "/services/siding",
    },
    {
      title: "Site Preparation",
      imageSrc: "/icons/site.png",
      link: "/services/site",
    },
    {
      title: "Tiling / Marble",
      imageSrc: "/icons/tile.png",
      link: "/services/tiling",
    },
    {
      title: "Wallpaper",
      imageSrc: "/icons/wallpaper.png",
      link: "/services/wallpaper",
    },
  ];

  return (
    <section className="@container mx-auto px-4 max-w-7xl mb-5">
      <header className="text-center">
        <h1 className="font-bold text-4xl pb-8">OUR PROJECTS</h1>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg hover:shadow-lg hover:shadow-black transition-shadow duration-300 p-4 h-40 @sm:h-36 w-full max-w-[200px] mx-auto"
          >
            <Link href={item.link} className="flex flex-col items-center justify-center h-full w-full space-y-2">
              <figure className="relative w-16 h-16 @sm:w-14 @sm:h-14 flex items-center justify-center">
                <Image
                  width={5000}
                  height={5000}
                  src={item.imageSrc}
                  alt={item.title}
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 50vw, 20vw"
                  priority={index < 8}
                />
              </figure>

              <h3 className="text-base @sm:text-sm font-semibold text-gray-800 leading-tight text-center px-2">{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
