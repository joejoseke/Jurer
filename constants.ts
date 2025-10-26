
import type { LegalCase } from './types';

export const LEGAL_CASES: LegalCase[] = [
  {
    id: 1,
    caseName: "Innovate Corp. v. Tech Solutions Inc.",
    caseNumber: "CV-2023-0112",
    status: "Active",
    summary: "A patent infringement case concerning proprietary AI algorithms for data compression.",
    fullText: "Plaintiff Innovate Corp. alleges that Defendant Tech Solutions Inc. has willfully infringed upon U.S. Patent No. 9,876,543 ('the '543 Patent'). The patent in question details a novel method for lossless data compression using a neural network architecture. Innovate Corp. argues that Tech Solutions' flagship product, 'DataSqueeze Pro,' incorporates this patented technology without license or authorization. The plaintiff seeks injunctive relief and damages for lost profits."
  },
  {
    id: 2,
    caseName: "State v. Anderson",
    caseNumber: "CR-2023-0045",
    status: "Closed",
    summary: "A criminal case involving charges of wire fraud and money laundering.",
    fullText: "The defendant, John Anderson, was charged with multiple counts of wire fraud under 18 U.S.C. § 1343. The prosecution presented evidence of a scheme to defraud investors through a fictitious cryptocurrency platform called 'CryptoGainz'. Transaction records and witness testimonies from victims were key pieces of evidence. The defense argued a lack of criminal intent, positioning Mr. Anderson as an unwitting participant. The jury returned a guilty verdict on all counts."
  },
  {
    id: 3,
    caseName: "Greenwood Environmental v. City of Metropolis",
    caseNumber: "ENV-2022-0201",
    status: "Appealed",
    summary: "An environmental law dispute over zoning permits for a new industrial park.",
    fullText: "Greenwood Environmental, a non-profit organization, filed suit against the City of Metropolis, challenging the city's decision to grant zoning permits for the development of an industrial park on protected wetlands. The plaintiff argues the city's environmental impact assessment was flawed and did not adequately consider the long-term ecological consequences, in violation of the National Environmental Policy Act (NEPA). The district court ruled in favor of the City. Greenwood has appealed the decision to the Circuit Court."
  },
  {
    id: 4,
    caseName: "Robinson v. MediCare Hospital",
    caseNumber: "MD-2023-0098",
    status: "Active",
    summary: "A medical malpractice lawsuit alleging negligence during a surgical procedure.",
    fullText: "The plaintiff, Sarah Robinson, alleges that negligence on the part of Dr. Evans at MediCare Hospital during a routine cholecystectomy resulted in significant post-operative complications, including a bile duct injury. The suit claims a breach of the standard of care expected from a competent surgeon. Expert testimony from both sides will be critical in determining whether the injury was a known risk of the procedure or a result of medical error. The hospital maintains its staff acted appropriately and within professional guidelines."
  }
];
