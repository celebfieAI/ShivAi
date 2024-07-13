import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import eCommerce from "@/fakers/e-commerce";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef } from "react";
import clsx from "clsx";
import _ from "lodash";

import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import PieChart from "@/components/PieChart";



import { Popover } from "@/components/Base/Headless";

import { FormCheck, FormInput } from "@/components/Base/Form";

import users from "@/fakers/users";


function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            General Report
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <div className="relative">
              <Lucide
                icon="CalendarCheck2"
                className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
              />
              <FormSelect className="sm:w-44 rounded-[0.5rem] group-[.mode--light]:bg-chevron-white group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent pl-9">
                <option value="custom-date">Custom Date</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </FormSelect>
            </div>
            <div className="relative">
              <Lucide
                icon="Calendar"
                className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
              />
              <Litepicker
                value={generalReportFilter}
                onChange={(e) => {
                  setGeneralReportFilter(e.target.value);
                }}
                options={{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="pl-9 sm:w-64 rounded-[0.5rem] group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-3.5">
          <div className="flex flex-col justify-around col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">

            <div className="flex flex-col items-center justify-around h-full">

              <div className="ml-0.5 h-full flex flex-col justify-evenly">
                <div className="font-medium text-2xl">Total Call Minutes</div>
                <div className="text-slate-500 text-6xl font-bold">100</div>
                <div className="text-2xl text-success">+688%</div>
              </div>
            </div>

          </div>
          <div className="flex flex-col justify-around col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">

            <div className="flex flex-col items-center justify-around h-full">

              <div className="ml-0.5 h-full flex flex-col justify-evenly">
                <div className="font-medium text-2xl">Total Call Minutes</div>
                <div className="text-slate-500 text-6xl font-bold">100</div>
                <div className="text-2xl text-success">+688%</div>
              </div>
            </div>


          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">

            <div className="flex flex-col items-center justify-around h-full">

              <div className="ml-0.5 h-full flex flex-col justify-evenly">
                <div className="font-medium text-2xl">Total Call Minutes</div>
                <div className="text-slate-500 text-6xl font-bold">100</div>
                <div className="text-2xl text-success">+688%</div>
              </div>
            </div>


          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">

            <div className="flex flex-col items-center justify-around h-full">

              <div className="ml-0.5 h-full flex flex-col justify-evenly">
                <div className="font-medium text-2xl">Total Call Minutes</div>
                <div className="text-slate-500 text-6xl font-bold">100</div>
                <div className="text-2xl text-success">+688%</div>
              </div>
            </div>



          </div>


        </div>
      </div>
      <div className="col-span-12">

        <div className="w-full h-full flex justify-between md:flex-row flex-col">

          <div className="flex flex-col gap-10 mt-10">


            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium">
                <p className="flex items-center font-bold"> <span> <Lucide
                  icon="PhoneCall"
                  className="block mr-4"
                /></span>Call Analysis</p>
                <p className="ml-9  text-xs">Here you can get a quick overview of how your calls are going within your organizations.</p>
              </div>

            </div>

            <div className="md:flex gap-4">

              <div className="flex flex-col p-5 box box--stacked md:w-[48%] w-full mb-8 md:mb-0">
                <PreviewComponent>
                  {({ toggle }) => (
                    <>

                      <div>

                        <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">

                          <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                            <Preview>
                              <PieChart height={300} />
                            </Preview>
                            <Source>
                              <Highlight>
                                {`
              <PieChart height={400} />
              `}
                              </Highlight>
                            </Source>
                          </div>
                        </div>
                        <p className="leading-relaxed">
                          Pie charts are a useful tool for visualizing the
                          distribution of data among categories or showing the
                          relative proportions of different parts within a whole.
                          By following the steps above and customizing the chart
                          to fit your specific data and design requirements, you
                          can effectively incorporate pie charts into your web
                          application for data visualization.
                        </p>
                      </div>
                    </>
                  )}
                </PreviewComponent>
              </div>

              <div className="flex flex-col p-5 box box--stacked md:w-[48%] w-full mb-6 md:mb-0">
                <PreviewComponent>
                  {({ toggle }) => (
                    <>

                      <div>

                        <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">

                          <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                            <Preview>
                              <PieChart height={300} />
                            </Preview>
                            <Source>
                              <Highlight>
                                {`
              <PieChart height={400} />
              `}
                              </Highlight>
                            </Source>
                          </div>
                        </div>
                        <p className="leading-relaxed">
                          Pie charts are a useful tool for visualizing the
                          distribution of data among categories or showing the
                          relative proportions of different parts within a whole.
                          By following the steps above and customizing the chart
                          to fit your specific data and design requirements, you
                          can effectively incorporate pie charts into your web
                          application for data visualization.
                        </p>
                      </div>
                    </>
                  )}
                </PreviewComponent>
              </div>

            </div>
          </div>


          <div className="flex flex-col gap-10 mt-10">

            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">
              <p className="flex items-center font-bold"> <span> <Lucide
                   icon="Users"
                className="block mr-4"
              /></span>Assistants table</p>
              <p className="ml-9 text-xs">Total call and average call duration aggreagted by assistant.</p>
            </div>
            </div>
           

            <div className="flex flex-col box box--stacked w-full">

              <div className="overflow-auto xl:overflow-visible">
                <Table className="border-b border-slate-200/60">
                  <Table.Thead>
                    <Table.Tr>

                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Name
                      </Table.Td>

                      <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500">
                        Call Count
                      </Table.Td>

                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Avg
                      </Table.Td>

                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {_.take(users.fakeUsers(), 10).map((faker, fakerKey) => (
                      <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">

                        <Table.Td className="py-4 border-dashed w-60 dark:bg-darkmode-600">
                          <div className="flex items-center">

                            <div className="ml-3.5">
                              <a
                                href=""
                                className="font-medium whitespace-nowrap"
                              >
                                {faker.name}
                              </a>

                            </div>
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="w-15">
                            <div className="text-xs text-slate-500">
                              {_.random(50, 100)}%
                            </div>

                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="whitespace-nowrap w-10">
                            {/* {faker.joinedDate} */}
                          </div>
                        </Table.Td>

                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>

            </div>
          </div>



        </div>

      </div>


    </div>
  );
}

export default Main;
