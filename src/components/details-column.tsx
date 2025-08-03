import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import StacksIcon from "@/assets/stacks-icon";

const DetailsColumn = () => {
  const List = [
    { value: "10/19/2017" },
    { value: "Ut" },
    { value: "Eros" },
    { value: "Eros" },
    { value: "Yes", hasCheck: true },
    { value: "Sit" },
    { value: "Lorem ipsum dolor" },
    { value: "Lorem ipsum dolor" },
  ];

  const AccordionList = [
    { title: "Lorem P" },
    { title: "Lorem S" },
    { title: "Lorem T" },
  ];

  return (
    <aside className="order-2 h-full grow-0 overflow-y-scroll rounded-2xl bg-white px-6 py-5 shadow-drop lg:order-1 lg:h-[calc(100dvh-3.5rem)] lg:basis-[31%]">
      <div className="flex flex-col gap-3">
        <div>
          <div className="mb-8 leading-[1.375rem]">
            <h2 className="mb-3 text-[1.25rem] font-bold text-[#02983E]">
              Description
            </h2>
            <p className="text-[0.75rem] text-gray-soft-700">
              Lorem ipsum dolor sit amet consectetur. Aenean sodales
              pellentesque gravida nibh et magna faucibus. Dui commodo ut metus
              amet egestas habitant viverra. Quisque fusce senectus facilisis
              non diam leo nulla sem pellentesque. Sit in vel sed cursus metus
              sit fringilla vestibulum.
            </p>
          </div>
          <div className="mb-6 leading-[1.375rem]">
            <h2 className="mb-3 text-[1.25rem] font-bold text-[#02983E]">
              Extra
            </h2>
            <p className="text-[0.75rem] text-gray-soft-700">
              Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
              fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
              lectus id ornare. Rhoncus in egestas in amet porttitor
              pellentesque sit. Amet gravida integer velit felis. Eu consectetur
              interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a
              aliquam eu quisque commodo lectus. Lectus ipsum velit purus
              viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris
              urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum
              habitant congue massa in etiam sit. Commodo nibh viverra lobortis
              augue lorem quam lorem suspendisse.
            </p>
          </div>
        </div>

        <hr className="w-full bg-gray-soft-100" />
        {List.map((item, index) => (
          <div key={index} className="flex items-center gap-5 text-[0.9375rem]">
            <p className="font-bold capitalize text-[#334155]">
              Lorem ipsum dolor
            </p>
            <div className="flex items-center gap-1">
              {item.hasCheck && <Check size={16} color="#08B94E" />}
              <p className="text-gray-soft-700">{item.value}</p>
            </div>
          </div>
        ))}
        <hr className="w-full bg-gray-soft-100" />
        <div className="flex flex-col gap-3">
          <p className="font-bold capitalize text-[#334155]">
            Lorem ipsum dolor sit
          </p>
          <Accordion type="multiple" className="flex flex-col gap-5">
            {AccordionList.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.title}
                className="rounded-2xl border border-gray-soft-50 px-4 py-3"
              >
                <div>
                  <AccordionTrigger asChild>
                    <button className="w-full cursor-pointer text-left">
                      <p className="mb-3 text-[0.9375rem] font-bold text-[#030229]">
                        {item.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 rounded-lg bg-gray-soft-25 px-4 py-1.5 capitalize xl:flex-nowrap">
                        <div className="flex items-center gap-2 border-gray-soft-400 xl:border-r xl:pr-4">
                          <StacksIcon />

                          <div>
                            <span className="mb-0.5 block text-[0.75rem] font-semibold leading-[0.875em] text-gray-soft-900">
                              Server
                            </span>
                            <span className="block text-[0.625rem] font-medium leading-[0/75rem] text-gray-soft-500">
                              Server
                            </span>
                          </div>
                        </div>
                        <p className="text-[0.875rem] text-gray-soft-900">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </button>
                  </AccordionTrigger>
                  <AccordionContent asChild className="p-0">
                    <p className="pt-4 text-[0.9375rem] text-gray-soft-700">
                      Lorem ipsum dolor sit amet consectetur. Nunc Vitae Tortor
                      Convallis Vitae Arcu Magna
                    </p>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default DetailsColumn;
