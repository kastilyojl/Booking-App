import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Table from "../../components/Table";

export default function Home() {
  const tableHeader = ["New participants"];
  const tableData = [
    ["John Doe", "Male", "johnDoe@gmail.com"],
    ["Mark", "Male", "mark123@gmail.com"],
    ["Hinata", "Female", "hinata@gmail.com"],
    ["John Doe", "Male", "johnDoe@gmail.com"],
    ["Anna Marie", "Female", "ann987@gmail.com"],
    ["Nina Nana", "Female", "nanaML@gmail.com"],
  ];

  return (
    <div>
      <Header>Dashboard</Header>
      <div className="grid grid-cols-[30%_1fr] gap-4">
        <div className="space-y-4">
          <Card className="grid grid-cols-2">
            <div className="text-center">
              <span
                className="text-[80px] font-medium text-[#365279] "
                style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
              >
                30
              </span>
            </div>
            <div>
              <div className="flex justify-end">
                <img
                  width="70"
                  height="70"
                  src="https://img.icons8.com/ink/48/certificate.png"
                  alt="certificate"
                />
              </div>
              <p
                className="text-lg  mt-[-20px] font-medium text-[#365279]"
                style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
              >
                Total <br /> Certificates
              </p>
            </div>
          </Card>
          <Card className="grid grid-cols-2">
            <div className="text-center">
              <span
                className="text-[80px] font-medium text-[#365279]"
                style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
              >
                90
              </span>
            </div>
            <div>
              <div className="flex justify-end">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/external-glyph-wichaiwi/64/external-participation-soft-power-glyph-wichaiwi.png"
                  alt="external-participation-soft-power-glyph-wichaiwi"
                />
              </div>
              <p
                className="text-lg mt-[-20px] font-medium text-[#365279]"
                style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
              >
                Total <br /> Participants
              </p>
            </div>
          </Card>
          <Card>Graph Here</Card>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Card className="grid grid-cols-2 w-full">
              <div className="text-center">
                <span
                  className="text-[80px] font-medium text-[#365279]"
                  style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
                >
                  95
                </span>
              </div>
              <div>
                <div className="flex justify-end">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-glyph-wichaiwi/64/external-participation-soft-power-glyph-wichaiwi.png"
                    alt="external-participation-soft-power-glyph-wichaiwi"
                  />
                </div>
                <p
                  className="text-lg mt-[-20px] font-medium text-[#365279]"
                  style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
                >
                  Total <br /> Seminars
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-2 w-full">
              <div className="text-center">
                <span
                  className="text-[80px] font-medium text-[#365279]"
                  style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
                >
                  90
                </span>
              </div>
              <div>
                <div className="flex justify-end">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-glyph-wichaiwi/64/external-participation-soft-power-glyph-wichaiwi.png"
                    alt="external-participation-soft-power-glyph-wichaiwi"
                  />
                </div>
                <p
                  className="text-lg mt-[-20px] font-medium text-[#365279]"
                  style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)" }}
                >
                  Total <br /> Participants
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card>
              <Table
                tableHeader={tableHeader}
                colSpan={3}
                tableData={tableData}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
