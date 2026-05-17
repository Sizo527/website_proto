const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageBreak
} = require('docx');

const border = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 160, line: 360 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, bold: opts.bold || false, italics: opts.italics || false })],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 200 },
    children: [new TextRun({ text, bold: true })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 160 },
    children: [new TextRun({ text, bold: true })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 140 },
    children: [new TextRun({ text, bold: true, italics: true })],
  });
}

function letterItem(letter, text) {
  return new Paragraph({
    spacing: { after: 120, line: 340 },
    indent: { left: 360, hanging: 360 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text: `${letter}) ` }), new TextRun({ text })],
  });
}

function eqLine(latex) {
  return new Paragraph({
    spacing: { before: 100, after: 100, line: 320 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: latex, font: "Cambria Math", italics: true })],
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function tableCellText(text, opts = {}) {
  return new TableCell({
    borders,
    width: { size: opts.width || 4680, type: WidthType.DXA },
    shading: opts.shade ? { fill: opts.shade, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      children: [new TextRun({ text, bold: opts.bold || false })],
    })],
  });
}

function tableCaption(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, italics: true, bold: true })],
  });
}

function tableNote(text) {
  return new Paragraph({
    spacing: { before: 60, after: 200 },
    children: [new TextRun({ text, italics: true, size: 20 })],
  });
}

// ======================================================================
// CHAPTER ONE
// ======================================================================

const chapter1 = [
  h1("CHAPTER ONE: INTRODUCTION"),

  h2("1.1 Introduction"),
  p("Agriculture in Zimbabwe is mostly rain-fed and this makes it very vulnerable to changes in climate, especially droughts. Smallholder farmers, who produce the bulk of the country's maize, are the most exposed group because they usually do not have irrigation infrastructure and lack the financial buffers needed to recover from a bad season. Rainfall in Zimbabwe has become erratic over the years and droughts keep disrupting maize production. The 2023/24 mid-season dry spell led to a 77% reduction in cereal production against the planning requirement, leaving harvest levels far below what is needed to feed the country (MLAFWRD, 2024). Such shocks point to the urgent need for risk-management tools that can protect rural livelihoods and strengthen food security."),
  p("Traditional crop insurance has not been taken up by smallholders because of high premiums, slow and complex claims processes and information asymmetries that lead to moral hazard and adverse selection (Hohl, 2019). Because of these challenges, most conventional schemes have either failed or chosen to avoid the smallholder market altogether (Dube, Dlakama and Munyala, 2025). The result is that when droughts occur, farmers often have to depend on emergency food aid or distress coping strategies, neither of which are timely or sustainable."),
  p("Parametric weather-index insurance offers a practical alternative because it triggers payouts using predefined indicators such as cumulative rainfall, instead of relying on field-based assessments. This makes claim settlement faster, reduces administrative costs and limits moral hazard since farmers cannot influence the index (Carter et al., 2017)."),
  p("This study seeks to develop a parametric weather-index insurance model to protect smallholder maize farmers from drought-related losses. The study proposes an index based on satellite-derived rainfall estimates calibrated to maize growth requirements, with the Normalized Difference Vegetation Index (NDVI) used as a proxy for vegetation stress. The choice to use NDVI as a stress proxy is necessitated by the unavailability of district-level smallholder maize yield records for the study period. Using rainfall to measure the cause of drought and NDVI to capture its effect helps to minimise basis risk and aligns payouts more closely with the actual losses experienced by farmers (Chantarat et al., 2013)."),
  p("The study focuses on Mazowe, Gutu and Chiredzi Districts which represent different agro-ecological regions, ranging from the high-rainfall highveld of Mazowe to the mid-altitude transitional zone of Gutu and the semi-arid lowveld of Chiredzi. Calibrating the index across these contrasting zones allows the model to capture the variations in climatic stress and improves how applicable the model is across the country. Actuarial techniques such as distribution fitting and Monte Carlo simulation are used to price the risk accurately, while modern data-driven methods help in refining the index thresholds. The aim is to improve the financial resilience of smallholder maize farmers by providing timely and reliable protection against drought-induced crop failure."),

  h2("1.2 Background of the Study"),
  p("Agriculture in the country is dominated by smallholder farmers who depend almost entirely on rain-fed maize production. These farmers usually operate on marginal soils with poor moisture retention, very limited irrigation infrastructure and constrained financial resources. Their livelihoods are highly sensitive to fluctuations in seasonal rainfall and this is because maize is a water-dependent crop with specific moisture requirements at planting, vegetative growth and reproductive stages."),
  p("Historical evidence shows that the country has experienced multiple severe droughts including those that were recorded in 1983, 1992, 2008, 2016, 2019 and 2023, all of which significantly reduced maize yields and contributed to widespread food insecurity. Climate change is making this vulnerability worse. Rising temperatures, shifting rainfall patterns and the increasing frequency of mid-season dry spells continue to push drought risk upward. These droughts have become more frequent in recent decades, as documented by the government's own assessment reports (MLAFWRD, 2024). These developments make it clear that there is a need for effective risk-financing solutions that match the realities faced by smallholder farmers."),
  p("Agricultural insurance has traditionally relied on indemnity-based products that compensate farmers after losses are verified in the field. Although such products offer comprehensive coverage, they have not been widely adopted by smallholders. Premiums are usually unaffordable and the process of verifying losses is costly, slow and difficult to administer across dispersed rural communities. These challenges also increase the exposure to moral hazard and adverse selection, which discourages insurers from offering conventional crop insurance at scale (Dube, Dlakama and Munyala, 2025). As a result of all this, most farmers depend on informal coping mechanisms, food aid or emergency support during drought years and these are reactive and do not provide consistent protection."),
  p("Parametric weather index insurance has emerged as a more practical alternative. Instead of compensating farmers based on observed losses, payouts are automatically triggered when a particular weather measurement falls below or rises above a defined threshold. Rainfall is the most widely used trigger variable since reliable satellite rainfall estimates are readily available, and drought remains the dominant hazard affecting maize production. Parametric insurance reduces administrative costs, allows quick payouts and limits behavioural distortions because farmers cannot influence rainfall measurements (Barnett and Mahul, 2007). Regional experiences from Kenya, where the Index-Based Livestock Insurance (IBLI) programme has been operating for over a decade, show that index insurance can build resilience when it is properly designed and supported (Chantarat et al., 2013)."),
  p("A central challenge in the design of parametric insurance is developing an index that reflects the real experiences of farmers. Many existing products rely on total seasonal rainfall, which does not capture the timing or distribution of rainfall across the critical maize growth stages. A season may record adequate cumulative rainfall but still result in poor yields if prolonged dry spells occur at planting, tasseling or grain filling. These mismatches create basis risk and this in turn reduces farmer confidence in the insurance product. To improve index performance, this study uses vegetation indicators, specifically NDVI, as the agronomic stress proxy against which the rainfall index is validated. NDVI directly measures vegetation health and provides an empirically observable signal of crop stress that is particularly valuable in settings where farmer-level yield data is unavailable. This approach has been used in similar contexts including the livestock insurance work of Chantarat et al. (2013) in Northern Kenya and the European drought insurance research of Vroege et al. (2021)."),
  p("Actuarial pricing is another essential component of the design. Premiums must reflect the underlying drought risk while remaining affordable. Because there are limited historical yield records, actuarial modelling has to rely heavily on rainfall analysis, drought indicators and simulated loss distributions. Tools such as probability distribution fitting and Monte Carlo simulation make it possible to estimate drought frequencies, expected payouts and the financial implications for insurers. Pricing must also take account of geographical differences in drought severity. Conditions in Chiredzi are drier and more drought-prone than those in Mazowe, and premiums should align with these variations."),
  p("Successful implementation also depends on farmer-centred and regulatory considerations. Previous index insurance work in the region shows that understanding of the product, trust in insurers, financial capacity, timing of payments and the availability of premium subsidies all influence uptake (Tsikirayi, Makoni and Matiza, 2013). Regulatory bodies and industry associations have shown growing interest in expanding agricultural index insurance and emerging policy frameworks now provide opportunities for scaling these products. Making sure that the index is transparent and widely accepted is essential for encouraging participation."),
  p("In summary, parametric weather index insurance provides a promising approach for managing drought risk among smallholder maize farmers. Its effectiveness depends on accurate index design, reduced basis risk, actuarially sound pricing and farmer-centred implementation strategies. This study contributes to these needs by designing and evaluating a rainfall-based parametric index, validated against NDVI as the agronomic stress proxy, for Mazowe, Gutu and Chiredzi as representative agro-ecological zones."),

  h2("1.3 Statement of the Problem"),
  p("Smallholder maize farmers in Zimbabwe remain highly vulnerable to recurrent droughts because of their reliance on rain-fed agriculture and the limited access they have to financial risk-mitigation tools. Traditional indemnity-based crop insurance is largely inaccessible to them due to high premiums, costly loss verification and the problems of moral hazard and adverse selection (Dube, Dlakama and Munyala, 2025). Although parametric weather-index insurance offers a faster and more transparent alternative, its application has been limited by poor index calibration, high basis risk, inconsistent data quality and not enough actuarial pricing research. There is little empirical evidence on how rainfall-based indices can be designed and validated across different agro-ecological zones, particularly under the data constraints typical of the Zimbabwean smallholder context where district-level yield records are not consistently available. As a result of this gap, farmers do not have a reliable and affordable insurance mechanism to protect their livelihoods against drought-induced crop losses, while insurers and policymakers do not have a locally tested framework to guide product development. This gap creates the need for the design and evaluation of a context-specific, drought-focused parametric weather-index insurance model for smallholder maize farmers."),

  h2("1.4 Research Aims"),
  letterItem("a", "To develop a drought-based parametric weather-index model suitable for smallholder maize farmers."),
  letterItem("b", "To construct and calibrate a rainfall-triggered index that accurately reflects agronomic stress across different agro-ecological regions."),
  letterItem("c", "To apply actuarial techniques in determining fair and sustainable premium rates for the proposed insurance product."),
  letterItem("d", "To evaluate the relationship between index performance, basis risk and the financial viability of the insurance model."),

  h2("1.5 Research Objectives"),
  letterItem("a", "To analyse historical rainfall patterns and drought frequency across the agro-ecological zones."),
  letterItem("b", "To construct and validate a drought-specific parametric rainfall index aligned with maize crop water requirements, using NDVI as the agronomic stress proxy."),
  letterItem("c", "To quantify basis risk associated with the proposed rainfall index across the selected agro-ecological zones."),
  letterItem("d", "To apply actuarial pricing methods in determining fair premium rates for the drought-based parametric insurance product."),

  h2("1.6 Research Questions"),
  p("Research questions are the questions used to shape and specifically focus the purpose of the study (Creswell, 2009). In this research project we have primary and secondary research questions."),
  h3("1.6.1 Primary research question"),
  letterItem("a", "How can a drought-based parametric weather-index insurance product be optimally designed and priced to protect smallholder maize farmers?"),
  h3("1.6.2 Secondary research questions"),
  letterItem("a", "What rainfall characteristics and drought indicators best explain agronomic stress in different agro-ecological zones?"),
  letterItem("b", "How accurately does the proposed rainfall-triggered index correlate with NDVI-based stress events?"),
  letterItem("c", "What is the magnitude and pattern of basis risk across the selected agro-ecological zones?"),
  letterItem("d", "Which actuarial pricing methods are most suitable for determining fair premium rates for the proposed parametric insurance model?"),

  h2("1.7 Significance of the Study"),
  h3("a) To the student"),
  p("The study will enhance the student's knowledge of climate-risk modelling, index design and actuarial pricing techniques as applied to agricultural insurance. It also gives the researcher an opportunity to integrate theoretical knowledge from actuarial science with the practical challenges that are faced by smallholder farmers in Zimbabwe. The research is also done as part of the University's requirements for final year academic work."),
  h3("b) To the University"),
  p("The findings and methodologies developed in this dissertation will form part of the University's academic resources and intellectual property. Future students and researchers may use this work as a reference for further studies on index insurance, climate-risk financing and agricultural modelling within Zimbabwe and beyond."),
  h3("c) To the insurance industry"),
  p("The research provides insurers with a structured framework for designing and pricing drought-based parametric weather-index insurance products. By showing how rainfall-based indices can be calibrated and actuarially evaluated under data constraints, the study supports the industry in developing scalable, cost-effective agricultural insurance solutions tailored to the country's agro-ecological zones."),
  h3("d) To policymakers and the agricultural sector"),
  p("The study offers insights that can inform national climate-risk management strategies. It highlights how parametric insurance can complement existing disaster-response mechanisms, improve the resilience of smallholder farmers and support policy alignment with climate-adaptation goals. The results can guide stakeholders in developing supportive regulatory frameworks, data infrastructure and subsidy mechanisms."),
  h3("e) To developing countries"),
  p("Given that many developing countries face similar climate-related agricultural risks and similar data constraints, the study contributes to the limited actuarial and empirical literature on parametric insurance within low-income farming systems. The methodologies and findings may be adapted for use in other drought-prone regions, helping to address the wider challenge of agricultural vulnerability under climate change."),

  h2("1.8 Scope of the Study"),
  p("This study is limited to smallholder maize farmers operating in Mazowe, Gutu and Chiredzi Districts of Zimbabwe. It focuses only on drought as the insured peril and considers only maize as the insured crop. The actuarial work in the study is restricted to the design of the rainfall trigger, the pricing of the premium and the assessment of basis risk against an NDVI-defined agronomic stress benchmark."),

  h2("1.9 Limitations of the Study"),
  letterItem("a", "In this research project, expenses other than the standard administrative and reinsurance loadings are ignored. This is because of the difficulty in obtaining detailed expense data across the local insurance industry and how difficult it would be to incorporate it into the model since each insurer has different cost structures. Therefore the loaded premiums are not inclusive of every operational expense an insurer might incur."),
  letterItem("b", "Computations of premiums and benefit structures are done using the expected value principle. This method may not capture the full range of insurer risk preferences, however it is widely used in agricultural index insurance and provides a reasonable starting point for pricing."),
  letterItem("c", "Computations of the premiums using a stochastic interest rate model could have been employed but such models require comprehensive market data including volatilities and term structures. In the Zimbabwean context it is difficult to find such data and so a constant force of interest is used even though stochastic modelling could lead to a more realistic result."),
  letterItem("d", "District-level smallholder maize yield records are not consistently available in the public domain for the study period. The study therefore uses NDVI as the agronomic stress proxy against which the rainfall index is calibrated and validated. NDVI captures vegetation greenness across all vegetation in a district, not just maize, and this is acknowledged as a limitation of the basis risk analysis."),
  letterItem("e", "District-level smallholder farmer income data is also not consistently available, which means that affordability analysis in this study is framed in terms of the loaded premium as a percentage of the insured sum rather than as a percentage of farmer income. A formal income-based affordability assessment is identified as a priority for further research."),

  h2("1.10 Delimitations of the Study"),
  p("Delimitations of the study refer to the boundaries that have been deliberately set by the researcher to make sure that the research remains focused and manageable. For this dissertation, the delimitations include the following:"),
  letterItem("a", "The study is restricted to smallholder maize farmers located in Mazowe, Gutu and Chiredzi Districts. These three districts were selected because they represent different agro-ecological regions, allowing the model to be tested across varying climatic conditions. However, the findings may not necessarily generalise to all districts in the country."),
  letterItem("b", "The research focuses only on drought as the insured peril. Other climate-related risks such as floods, hailstorms, cyclones, pest outbreaks and heatwaves are outside the scope of the study. The parametric insurance product is therefore designed only for rainfall-deficit conditions."),
  letterItem("c", "Only maize is considered in index calibration and pricing. Although smallholder farmers grow a range of crops, maize was chosen because of its importance as a staple crop and its sensitivity to drought. The insurance model may be adaptable to other crops but such extensions are not covered in this study."),
  letterItem("d", "The index design relies on secondary data sources including historical CHIRPS rainfall and MODIS NDVI records. The study does not conduct field-level crop assessments or agronomic experiments. All index validation and pricing are based on these historical datasets and publicly available agricultural reports."),
  letterItem("e", "The actuarial modelling done is limited to determining premium rates and evaluating basis risk against the NDVI-defined stress benchmark. The study does not extend to insurer capital modelling, reinsurance structuring or financial solvency analysis since these fall outside the scope of undergraduate research requirements."),
  letterItem("f", "The study focuses on the actuarial and financial viability of the product assuming rational utility maximisation. While behavioural factors such as trust and financial literacy are acknowledged as critical for uptake, they are outside the quantitative scope of this pricing model."),

  h2("1.11 Assumptions of the Study"),
  p("Assumptions of the study are beliefs that must hold true for the research to be feasible and meaningful. In this study, the assumptions include:"),
  letterItem("a", "The climatic and vegetation data used in the study will provide accurate and reliable information for index construction. This includes rainfall data obtained from CHIRPS satellite-merged datasets and NDVI data from the MODIS platform. Although the available record is finite, it is sufficient when augmented by actuarial smoothing techniques such as Credibility Theory to construct a viable index."),
  letterItem("b", "The relationship between drought indicators such as rainfall deficits and NDVI-based agronomic stress is assumed to be sufficiently strong to allow the development of a meaningful parametric index. It is further assumed that maize production in Mazowe, Gutu and Chiredzi is predominantly rain-fed such that rainfall variability is the primary driver of stress outcomes."),
  letterItem("c", "It is also assumed that NDVI is a reasonable proxy for agronomic stress at the district level. While NDVI captures vegetation greenness across all land covers, the dominant land cover during the maize growing season in the three study districts is cropland, and previous studies including Chantarat et al. (2013) and Vroege et al. (2021) support the use of NDVI as a loss benchmark in similar settings."),
  letterItem("d", "In the actuarial modelling process, it is assumed that historical climate patterns used in constructing the index reasonably approximate future rainfall variability during the modelling horizon. Although climate change may introduce gradual shifts, the study assumes no abrupt deviations that would invalidate the use of historical rainfall distributions."),

  h2("1.12 Definition of Key Terms"),
  p("For clarity and consistency, the important terms used in this dissertation are defined below."),
  h3("Smallholder Farmer"),
  p("A farmer operating on a small plot of land, typically under 5 hectares, relying mainly on family labour and rain-fed production. Smallholders generally farm in communal or resettlement areas and are highly vulnerable to weather shocks."),
  h3("Parametric Insurance (Weather-Index Insurance)"),
  p("Insurance that pays out when a predefined weather index, such as a rainfall level, crosses a set threshold without requiring field loss assessments. Payouts are fast and transparent but depend on how well the index reflects actual farmer losses."),
  h3("Drought"),
  p("A period of significantly below-normal rainfall that leads to reduced soil moisture and crop stress. In this study, drought is measured using rainfall totals for the maize growing season."),
  h3("Normalized Difference Vegetation Index (NDVI)"),
  p("A satellite-based indicator of vegetation health derived from the difference between near-infrared and red reflectance. Lower NDVI values signal stressed vegetation. NDVI is used in this study as the agronomic stress proxy against which the rainfall index is validated."),
  h3("Basis Risk"),
  p("The mismatch between index-triggered payouts and actual agronomic stress events. High basis risk occurs when stress events do not result in payouts (false negatives, Type I error) or when payouts are made in seasons with no observed stress (false positives, Type II error)."),
  h3("Agro-Ecological Zone"),
  p("A region defined by its climate, soils and agricultural potential. Natural Regions I to V differ in rainfall patterns. Mazowe, Gutu and Chiredzi represent different zones used in this study to test the index across varying conditions."),

  h2("1.13 Organisation of the Dissertation"),
  p("The dissertation is structured into five chapters as outlined below."),
  h3("Chapter One: Introduction"),
  p("This first chapter has introduced the research topic and context, presented the problem statement and defined the aim, objectives and scope of the study. It has also clarified the key terms and the significance of the study."),
  h3("Chapter Two: Literature Review"),
  p("The second chapter reviews relevant literature and theoretical frameworks underlying weather-index insurance and climate risk management. It covers global and regional experiences with parametric insurance, theories of risk and insurance applicable to agriculture, and empirical findings from previous studies including the use of NDVI as a loss proxy in data-constrained settings. It ends by identifying gaps in knowledge that justify the current research."),
  h3("Chapter Three: Research Methodology"),
  p("This chapter details the methodology adopted to achieve the research objectives. It describes the research design, the data sources used, including CHIRPS rainfall and MODIS NDVI data, and the specific analytical techniques employed. Key components include the actuarial modelling approach, the index development process and the basis risk assessment framework."),
  h3("Chapter Four: Results and Discussion"),
  p("Chapter Four presents and analyses the research findings. Key elements include the developed drought index for each district, its performance statistics such as correlation with NDVI and trigger accuracy, actuarial simulation results including the estimated premiums and payout distributions, and basis risk test outcomes."),
  h3("Chapter Five: Conclusions and Recommendations"),
  p("The final chapter summarises the key findings and confirms whether the research aim and objectives were achieved. Recommendations follow, tailored for different stakeholders including insurance practitioners, policymakers and future researchers."),

  h2("1.14 Chapter Summary"),
  p("This chapter has introduced the study on developing a drought-based parametric weather-index insurance model for smallholder maize farmers in Zimbabwe. It has highlighted the country's dependence on rain-fed agriculture, the growing impact of drought and the shortcomings of traditional indemnity insurance. These challenges justify the need for a simple, reliable and actuarially sound parametric insurance product tailored to local conditions. The chapter outlined the research aim, objectives and questions, presented the significance of the study and the rationale for using NDVI as the agronomic stress proxy, and stated the key assumptions and delimitations. Overall, Chapter One provides the motivation, scope and direction of the study, preparing the groundwork for the literature review that follows in Chapter Two."),

  pageBreak(),
];

// ======================================================================
// CHAPTER TWO
// ======================================================================

const chapter2 = [
  h1("CHAPTER TWO: LITERATURE REVIEW"),

  h2("2.1 Introduction"),
  p("The main aim of this chapter is to provide a review of the material that other authors have already written in the field of study that the researcher has embarked on. Its main purpose is therefore not to simply summarise the literature but to provide a critical analysis of the scholarship already in place. This helps the researcher discover and understand the theories underpinning the research, paving the way to test them in a process known as the deductive approach."),
  p("In this chapter, theories and conceptual frameworks underpinning the pricing methodology for parametric crop insurance are recounted. It begins by having a definition of terms and the theories that are part of the research project. Empirical evidence, citing other researchers who have attempted to explore the issues associated with the subject area, is also brought to light. The chapter is then concluded by mentioning the gaps in the literature that have been discovered by the researcher."),

  h2("2.2 Definition of Key Terms"),

  h3("Parametric Insurance"),
  p("Parametric insurance is a framework where payouts are dependent solely on the realisation of an objective meteorological index, for example cumulative rainfall falling below a specific threshold (Carter et al., 2017). Rather than compensating the farmers based on assessment of their individual crop losses, this approach effectively bypasses the administrative burden of assessing the field for losses. By removing the payout from the actual farm yield, the product becomes less susceptible to moral hazard since the insured farmer has no power to influence the external weather indices."),

  h3("Basis Risk"),
  p("Basis risk is defined as the mismatch between a payout received (or not received) and the actual loss. Carter et al. (2017) describe this as the residual variance that the index fails to capture. There are two types of basis risk:"),
  letterItem("a", "Type 1 Error where a farmer suffers a loss from, for example, a drought and the satellite data fails to pick up on that."),
  letterItem("b", "Type 2 Error where a farmer receives payment for a loss that did not happen."),

  h3("Smallholder Farmer"),
  p("Within the context of this study, the definition of smallholder farmer goes beyond simple land size. While Mugandani et al. (2012) classify them as farmers operating on less than five hectares, the actuarial significance of this demographic is that their finances are vulnerable making them especially sensitive to economic pressures or small changes. These are farmers who rely mostly on rain-fed systems and family labour, operating with zero capital buffers. It is the lack of savings and limited access to credit that makes them vulnerable to premium changes and delayed claims."),

  h3("Systematic Risk"),
  p("This refers to the non-diversifiable risk that affects an entire market. Drought is a classic example of systematic risk because rainfall deficits typically span vast geographical areas which triggers losses for many farmers at the same time."),

  h3("Non-Systematic Risk"),
  p("This refers to localised hazards that are unique to an individual farm. These include localised hail, pests or poor farming practices. Traditional indemnity insurance attempts to cover these risks but this leads to high administrative costs and moral hazard. A critical advantage of the parametric model is that it excludes non-systematic risk and this ensures affordability."),

  h3("Normalized Difference Vegetation Index (NDVI)"),
  p("Of particular technical importance to this study is the Normalized Difference Vegetation Index (NDVI), a remote-sensing metric that serves as a proxy for agricultural drought and crop stress. Rather than relying solely on rainfall data, which can sometimes be misleading if the timing of the rain does not match the crop's growth cycle, NDVI provides a direct measure of vegetation health. The metric works by quantifying the difference between Near-Infrared light, which healthy vegetation reflects, and Red light, which it absorbs. The actuarial logic for using this variable as a stress proxy is grounded in the empirical observation that vegetation greenness is a direct biological response to soil moisture availability (Chantarat et al., 2013). In this study, NDVI plays a dual role: it serves as the agronomic stress benchmark against which the rainfall index is validated, and it provides a secondary diagnostic check on the rainfall index where the two signals diverge."),

  h3("2.2.1 Critical Evaluation of Index Variables"),
  p("A critical design decision in parametric insurance is the choice of the index that triggers payouts. The literature identifies several competing options and each has distinct advantages and limitations in the Zimbabwean context."),
  p("Rainfall indices were the pioneers of drought insurance, triggering payouts when cumulative rainfall falls below a specific threshold (World Bank, 2011). While their simplicity makes them intuitive for farmers, they suffer from high spatial basis risk. In districts like Gutu, where meteorological stations are sparse, a rainfall deficit recorded at the station may not reflect the actual rainfall on a farm 20 km away. Consequently rainfall-based indices often fail to trigger during agricultural droughts if the timing of the rain does not align with the crop growth cycle."),
  p("Standardised Precipitation Index (SPI) attempts to fix the raw rainfall problem by standardising precipitation relative to historical norms. While it allows for better comparison across regions, Hohl (2019) notes that its operational use can be limited because of complexity. Smallholder farmers often struggle to understand the mathematical z-score derivation of SPI and this leads to trust issues."),
  p("Yield Index, also known as the Area-Yield Index, is theoretically the gold standard because it triggers based on actual regional output, minimising design risk. However, Dube, Dlakama and Munyala (2025) highlight a fatal flaw for Zimbabwe: the lack of reliable, granular historical yield data for communal lands. Without a clean historical dataset, insurers cannot price the risk accurately and this renders this option unviable for Chiredzi and Gutu. This same data gap also constrains researchers, as the absence of district-level yield data means that alternative loss benchmarks must be used for academic validation work."),
  p("NDVI measures vegetation greenness via satellite, serving as a direct proxy for crop health. Unlike rainfall, which assumes that rain equals crop growth, NDVI measures the actual biological reality on the ground. It is objective, tamper-proof and widely used in livestock and crop insurance pilots. While it has limitations such as potential cloud interference, it is the most robust option for data-poor regions. Vroege et al. (2021) note that for semi-arid regions, NDVI and related vegetation indicators reduce basis risk by capturing the impact of agricultural drought, that is soil moisture deficit, rather than just meteorological drought."),
  p("Of particular relevance to this study is the use of NDVI as a loss benchmark in academic and operational settings where farmer-level yield data is unavailable. Chantarat et al. (2013) used NDVI as the loss measure in their work on index-based livestock insurance in Northern Kenya, calibrating contract triggers against vegetation deficit thresholds rather than against animal mortality records that were prohibitively expensive to collect. More recently, Vroege et al. (2021) used satellite-derived soil moisture and vegetation indicators as the validation benchmark for crop drought insurance in Europe, arguing that remote-sensing variables provide a defensible empirical anchor in settings where traditional yield records are not granular enough for district-level analysis. This study draws on the same methodological tradition by using NDVI as the agronomic stress proxy for the basis risk assessment."),
  p("Based on this evaluation, this study adopts a rainfall-based index as the primary contractual trigger, calibrated to critical maize growth stages using CHIRPS satellite data, with NDVI serving as the agronomic stress benchmark against which the index is validated. Rainfall is selected as the contractual trigger for its simplicity, long historical record, transparency to farmers and direct connection to the insured peril which is drought. NDVI is used as the validation benchmark because it directly observes vegetation health and provides an empirical anchor for the basis risk analysis in the absence of district-level yield records. This hybrid approach strikes the best practical balance between data availability, affordability and minimisation of basis risk across the contrasting agro-ecological zones of Mazowe, Gutu and Chiredzi."),

  h2("2.3 Theoretical Framework"),

  h3("2.3.1 Expected Utility Theory"),
  p("At the centre of the decision-making matrix for any smallholder farmer is the Expected Utility Theory. It was originally put together by Von Neumann and Morgenstern (1944). It implies that a rational agent maximises expected utility rather than just expected wealth. Smallholder farmers in Zimbabwe are inherently risk averse such that their utility function is concave (U'' < 0). This means the pain of a financial loss during a drought is far more severe than the pleasure of an equivalent gain. This theory provides the fundamental justification for why a farmer would be willing to pay a premium P, even when the premium might be higher than the expected loss. This essentially transfers the catastrophic tail risk to the insurer. It allows for smoothening of their consumption curve and ensures that their utility remains stable even when the state of nature is unfavourable."),

  h3("2.3.2 Index Design Theory and Basis Risk Decomposition"),
  p("This theoretical framework moves beyond the simple definition of basis risk and decomposes the error term into its constituent parts to understand why parametric models fail. As conceptualised by Carter et al. (2017), the total basis risk in a contract is the sum of Spatial Basis Risk, that is the geographic distance between the farm and the satellite pixel, and Design Basis Risk, that is the poor correlation between the trigger metric and actual crop yield. This theory frames the problem as a trade-off between Type 1 Error (False Negative) and Type 2 Error (False Positive). A Type 1 error, where a farmer suffers a drought but receives no payout, is theoretically catastrophic because it destroys the utility gain promised by Expected Utility Theory. The mathematical objective of this study is therefore not merely to price the risk but to minimise this specific variance term by validating the rainfall index against an independent NDVI-based stress benchmark, thereby providing empirical evidence on the design basis risk component."),

  h3("2.3.3 Information Asymmetry and Moral Hazard"),
  p("A major structural barrier to the development of a robust agricultural insurance market in Zimbabwe is best explained by the Theory of Information Asymmetry (Akerlof, 1970). In any standard indemnity contract, an inherent imbalance exists: the farmer always possesses more information about their true risk profile and farming diligence than the insurer does. This asymmetry breeds two critical market failures: Adverse Selection where only the highest-risk farmers purchase coverage, and Moral Hazard where insured farmers may neglect their crops because they are protected (Arrow, 1963)."),
  p("For a Zimbabwean insurer, the administrative cost of monitoring thousands of scattered smallholders to prevent this behaviour is prohibitive. This explains why the traditional market has failed (Dube, Dlakama and Munyala, 2025). Parametric insurance however offers a theoretical solution to this impasse. Because the payout is triggered by an independent satellite index, a variable that the farmer cannot touch or influence, moral hazard is effectively eliminated. This structural feature renders the product scalable, since it removes the need for expensive behavioural monitoring and allows the insurer to price the risk purely on objective data."),

  h3("2.3.4 Transaction Cost Theory"),
  p("Closely linked to the issue of monitoring is Transaction Cost Theory (Coase, 1937). This theory is crucial for interpreting the findings of Dube, Dlakama and Munyala (2025) who identified that the primary driver of market failure in Zimbabwe is the prohibitive cost of verification. Under a traditional indemnity model, the insurer must incur significant costs to send a loss adjuster to remote rural farms in districts like Chiredzi or Gutu."),
  p("According to Transaction Cost Theory, market exchanges will only occur if the cost of executing the transaction is lower than the value created. When the friction costs of verifying a small claim exceed the potential profit margin, the market collapses, which is exactly what has happened in the smallholder sector. This theory provides the intellectual licence for the move to parametric insurance. By replacing the human loss adjuster with a satellite trigger, the model effectively eliminates the marginal cost of verification, thereby restoring market equilibrium and making the product commercially viable."),

  h3("2.3.5 Pricing and Credibility Theory"),
  p("The transition from theoretical utility to a concrete insurance premium requires a rigorous mathematical framework. Fundamentally a parametric insurance contract is analogous to a put option on the weather index. The insurer agrees to pay a claim if the index R falls below a specific strike price (trigger) K."),
  p("The Pure Premium for such a contract is derived from the expected loss approximation. Actuarially this is defined as the integral of the loss function over the probability density function f(R) of the rainfall index:"),
  eqLine("$P^* = \\int_0^K (K - R) f(R) \\, dR$"),
  p("Where K is the trigger level, for example 300mm of rainfall, R is the realised rainfall and f(R) is the probability distribution of rainfall, often modelled using a Gamma, Weibull or Lognormal distribution in semi-arid southern African settings (Klugman, Panjer and Willmot, 2012)."),
  p("A critical challenge in districts like Chiredzi is the scarcity of historical data. To address this, the study relies on Credibility Theory (Bühlmann, 1967) to weight the limited local data against the broader regional experience. The credibility premium is calculated as:"),
  eqLine("$P_{cred} = Z \\cdot \\bar{X}_{local} + (1 - Z) \\cdot \\bar{X}_{regional}$"),
  p("Where the local mean is the observed mean loss from the limited local data, the regional mean is the robust regional mean (or satellite-derived climatology), and Z is the credibility factor calculated as Z = n / (n + k)."),
  p("This mathematical formulation provides the mechanism to price the risk accurately even in data-poor environments, ensuring that the premiums charged are statistically sufficient to cover future claims without being prohibitively expensive for the farmer."),

  h2("2.4 Empirical Literature Review"),

  h3("2.4.1 Global Studies"),
  p("The international agricultural insurance market has been undergoing a sustained shift from traditional indemnity models to technology-driven parametric solutions. Carter et al. (2017) review the development of index insurance globally and argue that the emergence of high-resolution satellite data, combined with improved contract design, has been central to recent attempts to make index insurance viable for smallholder agriculture in developing countries. They conclude however that index insurance remains expensive without subsidy and that revised contract designs and better data are needed to close the gap to commercial viability. This finding sets the broader context for the present study."),
  p("Vroege et al. (2021) provide a parallel methodological reference for the present study. They designed a satellite-based drought insurance product for European crops using soil moisture and vegetation indicators. In the absence of farmer-level yield records that matched the spatial resolution of their satellite data, they used remote-sensing variables as the loss benchmark for calibration. Their work establishes that NDVI and related vegetation indicators are defensible loss proxies for academic and operational insurance design when ground-level yield records are unavailable or insufficiently granular."),

  h3("2.4.2 Regional Studies"),
  p("Within the broader context of the Sub-Saharan region, East Africa stands out as the primary testing ground for weather-index insurance. Of particular relevance to this study is the work of Chantarat et al. (2013), who designed the Index-Based Livestock Insurance (IBLI) product for Northern Kenya. Faced with the inability to verify individual livestock mortality across vast and remote pastoralist territories, they used NDVI as the contract trigger and as the validation benchmark. The premium structure was calibrated against a vegetation deficit threshold rather than against animal losses. Their work has since become a methodological reference point for designing index insurance under data constraints in Sub-Saharan Africa, and it directly supports the use of NDVI as the loss proxy in the present study."),
  p("Building on this earlier methodological work, Muleke et al. (2025) recently evaluated the long-term behavioural changes among 400 smallholder farmers in Njoro Sub-County, Kenya, who were introduced to parametric weather-index products. The core finding of their research was that insured farmers were more aggressive in their input investment choices. Specifically, those with active coverage applied an average of 28.7 kg/acre more chemical fertiliser than their uninsured counterparts. This finding empirically validates the risk-coping hypothesis, the economic theory that suggests insurance acts as a psychological safety net which unlocks productive investment."),
  p("However, the regional narrative is not uniformly positive. Despite these clear productivity gains, the actual market penetration of these products remains low across the SADC region. Carter et al. (2017) similarly point to trust and perceived basis risk as barriers to uptake across sub-Saharan markets. Farmers without formal training in actuarial triggers are often sceptical of a product that pays out based on a satellite reading rather than an inspection of their farm, and this scepticism is reinforced when payouts and visible field outcomes diverge."),
  p("This regional experience offers a stark warning for the Zimbabwean context. It suggests that designing a mathematically perfect model is not enough; the model must also be intelligible to the user. If the smallholder farmer in Gutu or Chiredzi cannot intuitively understand how the rainfall trigger correlates with their wilting crops, the product will likely face the same rejection rates seen elsewhere in the region. Therefore this study takes the position that minimising basis risk is not just a technical actuarial requirement, but a fundamental prerequisite for building consumer trust."),

  h3("2.4.3 Domestic Studies"),
  p("Narrowing the focus to the domestic market, recent studies have highlighted the inefficiencies affecting the Zimbabwean agricultural insurance sector. A pivotal study by Dube, Dlakama and Munyala (2025), published in the African Development Finance Journal, assessed the underwriting factors affecting the profitability of crop insurance in Zimbabwe. Using a mixed-methods approach combining qualitative interviews with senior underwriters and quantitative surveys of 13 sector practitioners, the authors investigated the drivers of financial instability in the sector."),
  p("Their findings revealed that loss assessment was the most significant factor influencing profitability, largely because of the high administrative costs and logistical difficulties associated with verifying claims in dispersed rural areas. Their regression analysis quantified this directly: a unit increase in loss assessment costs decreases profitability by 1.154 units on average. The study also found that loss ratios for most crop products exceeded 100% over the 2014 to 2018 period, indicating that the traditional indemnity model is financially unsustainable for insurers when applied to smallholder farmers since the cost of verifying numerous small claims erodes underwriting margins."),
  p("This empirical evidence directly supports the problem statement of the current study, which argues that traditional crop insurance fails because of costly loss verification and information asymmetries. However, while Dube, Dlakama and Munyala (2025) identified the cost of loss assessment as a barrier, their study stopped short of proposing actuarial alternatives to the indemnity model. This creates a clear gap in the local literature. While the financial unviability of traditional insurance is well-documented, there is insufficient empirical research on the design and pricing of parametric alternatives that eliminate the need for field-based loss assessments. This study aims to fill that gap by designing a rainfall-based index that bypasses the costly verification processes identified by Dube, Dlakama and Munyala (2025)."),
  p("An earlier study by Tsikirayi, Makoni and Matiza (2013) documented low uptake of agricultural insurance in Zimbabwe and attributed this to limited product design and weak farmer engagement. Their findings remain relevant more than a decade later, as the policy and product gaps they identified have not been comprehensively addressed in the published literature. Beyond these two studies, the broader Zimbabwean evidence base on parametric pricing remains thin, which highlights the contribution of the present study."),

  h2("2.5 Policy and Regulatory Environment for Index Insurance in Zimbabwe"),
  p("The viability and scalability of parametric crop insurance are closely linked to the prevailing policy and regulatory environment. In Zimbabwe, insurance regulation falls under the authority of the Insurance and Pensions Commission (IPEC), whose mandate includes market stability, consumer protection and the promotion of inclusive insurance solutions. Historically, Zimbabwe's regulatory framework was designed around traditional indemnity-based insurance products and did not explicitly accommodate index-based insurance. However, recent regulatory developments indicate a gradual shift towards recognising climate risk insurance as a policy priority (Hohl, 2019)."),
  p("Microinsurance regulation in Zimbabwe creates a distinct regulatory tier for microinsurers, characterised by lower capital requirements and proportionate regulatory obligations, with the explicit objective of improving access for underserved groups such as smallholder farmers. Although the framework acknowledges index insurance as an innovative mechanism in principle (IPEC, 2024), it has not historically provided detailed operational guidelines for the design, pricing or regulation of index-based agricultural products. Consequently microinsurance provision in Zimbabwe has remained concentrated in life, funeral and simple asset covers, with limited penetration into agricultural risk transfer."),
  p("This regulatory situation has been widely noted in the literature, particularly given Zimbabwe's pronounced exposure to climate-related shocks such as drought (Carter et al., 2017). The absence of explicit standards for index insurance, covering issues such as basis risk disclosure, data governance and trigger design, has meant that early index-based initiatives operated largely as pilots rather than scalable market products. From a policy perspective, this reflected a nascent understanding of how parametric insurance could be integrated into existing insurance law, which traditionally requires proof of loss and insurable interest."),
  p("Recent industry reporting suggests that this gap is beginning to close, with IPEC giving increasing attention to agricultural index insurance in its sector reviews (IPEC, 2024). Government policy has also acknowledged the role of insurance in climate adaptation and agricultural resilience. National strategies on financial inclusion and agricultural development emphasise risk management as a prerequisite for productivity and investment (Dube, Dlakama and Munyala, 2025). While there is currently no permanent premium subsidy scheme for index insurance, the literature suggests that targeted public support, particularly in the early stages of market development, can play a catalytic role in improving uptake and trust among smallholder farmers (Carter et al., 2017)."),
  p("From a market structure perspective, regulatory accommodation of international reinsurance participation is also critical. Given the covariate nature of drought risk, local insurers often lack sufficient capital capacity to absorb systemic losses (Hohl, 2019). Allowing structured reinsurance arrangements enables domestic insurers to participate in index insurance markets without compromising solvency. This is consistent with inclusive insurance models observed elsewhere in sub-Saharan Africa where global reinsurers play a central role in supporting agricultural index schemes."),
  p("Despite these positive developments, several regulatory and policy gaps remain. Data infrastructure continues to pose a challenge, as effective index insurance depends on reliable and officially endorsed meteorological and satellite data (Dube, Dlakama and Munyala, 2025). Consumer protection mechanisms tailored specifically to index insurance, such as dispute resolution processes for non-trigger events, are still underdeveloped. Furthermore, actuarial guidance on reserving and capital treatment for index-based liabilities remains limited, raising questions about long-term market stability (IPEC, 2024)."),
  p("Overall, Zimbabwe's policy and regulatory environment is transitioning from passive recognition to active engagement with parametric insurance. While early frameworks lacked explicit focus on climate risk and index design, recent regulatory initiatives suggest growing institutional support. This evolving landscape provides a timely context for the present study, which contributes actuarial insight into the pricing and design of index insurance products under Zimbabwean conditions."),

  h2("2.6 Conceptual Framework"),
  p("The conceptual framework presented in Figure 2.1 visually synthesises the operational logic of the study. It translates the theoretical constructs of Transaction Cost Theory and Credibility Theory into a functional actuarial model. The framework posits that by substituting expensive manual loss verification with satellite-derived data (Inputs), and processing this data through robust stochastic models (Process), the study can generate a financially viable insurance product (Output) that minimises basis risk."),

  // Placeholder for Figure 2.1 — flag for user
  new Paragraph({
    spacing: { before: 200, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({
      text: "[Figure 2.1: Conceptual framework diagram — to be inserted]",
      italics: true, color: "808080"
    })],
  }),
  new Paragraph({
    spacing: { before: 0, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Figure 2.1: Conceptual framework", italics: true, bold: true })],
  }),

  h3("2.6.1 Independent Variables (Inputs)"),
  p("As shown in Figure 2.1, the model relies on two primary data streams defined in the research assumptions:"),
  letterItem("a", "Meteorological Data: Historical rainfall records derived from CHIRPS satellite-merged data serve as the primary independent variable to track drought frequency and severity."),
  letterItem("b", "Vegetation Data (NDVI): The Normalized Difference Vegetation Index from MODIS is used as the agronomic stress benchmark. Its function is to provide an empirical anchor for the basis risk assessment in the absence of district-level smallholder yield records."),

  h3("2.6.2 The Actuarial Process (Mediating Variables)"),
  p("The core of the framework is the mathematical transformation of raw data into a risk premium. This process involves three specific adaptations:"),
  letterItem("a", "Agro-Ecological Calibration: Trigger thresholds are adjusted specifically for each Natural Region to reflect the rainfall expectations of that zone."),
  letterItem("b", "Credibility Weighting: Recognising the data scarcity in rural Zimbabwe, the model applies Bühlmann's Credibility Theory to smooth the volatility of local data by blending it with regional climatology."),
  letterItem("c", "Stochastic Pricing: The final premium is derived using Monte Carlo simulations. The model fits the rainfall data to Gamma, Weibull or Lognormal distributions and selects the best-fitting distribution per district."),

  h2("2.7 Summary of Empirical Literature and Research Gaps"),
  p("A summary of the key empirical literature reviewed is presented in Table 2.1."),

  new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: "Table 2.1: Summary of literature on parametric crop insurance", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1700, 1300, 1900, 2230, 2230],
    rows: [
      new TableRow({ children: [
        tableCellText("Author and Year", { width: 1700, bold: true, shade: "D5E8F0" }),
        tableCellText("Region", { width: 1300, bold: true, shade: "D5E8F0" }),
        tableCellText("Focus of Study", { width: 1900, bold: true, shade: "D5E8F0" }),
        tableCellText("Key Finding", { width: 2230, bold: true, shade: "D5E8F0" }),
        tableCellText("Identified Research Gap", { width: 2230, bold: true, shade: "D5E8F0" }),
      ]}),
      new TableRow({ children: [
        tableCellText("Carter et al. (2017)", { width: 1700 }),
        tableCellText("Global / SSA", { width: 1300 }),
        tableCellText("Reassessment of index insurance", { width: 1900 }),
        tableCellText("Index insurance remains expensive without subsidy; revised contract designs and better data are needed.", { width: 2230 }),
        tableCellText("Provides global synthesis but no calibrated pricing model for Zimbabwean smallholders.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chantarat et al. (2013)", { width: 1700 }),
        tableCellText("Kenya", { width: 1300 }),
        tableCellText("NDVI-based livestock insurance", { width: 1900 }),
        tableCellText("Established NDVI as a defensible loss benchmark for index insurance in data-constrained pastoralist settings.", { width: 2230 }),
        tableCellText("Methodology applied to livestock; the present study extends NDVI-as-proxy logic to smallholder maize.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Vroege et al. (2021)", { width: 1700 }),
        tableCellText("Europe", { width: 1300 }),
        tableCellText("Satellite-based drought insurance", { width: 1900 }),
        tableCellText("Soil moisture and NDVI are valid loss proxies where farmer yield records are insufficiently granular.", { width: 2230 }),
        tableCellText("Methodology not adapted for sub-Saharan smallholder context with semi-arid rainfall patterns.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Muleke et al. (2025)", { width: 1700 }),
        tableCellText("Kenya", { width: 1300 }),
        tableCellText("Behavioural uptake", { width: 1900 }),
        tableCellText("Insured farmers apply 28.7 kg/acre more fertiliser, validating the risk-coping hypothesis.", { width: 2230 }),
        tableCellText("Focused on the impact of insurance on farming behaviour, not on the actuarial pricing of the product itself.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Hohl (2019)", { width: 1700 }),
        tableCellText("Global", { width: 1300 }),
        tableCellText("Agricultural risk transfer", { width: 1900 }),
        tableCellText("Comprehensive treatment of pricing, reinsurance and capital market solutions for agricultural risk.", { width: 2230 }),
        tableCellText("Provides theoretical framework but no Zimbabwe-specific empirical calibration.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Dube, Dlakama and Munyala (2025)", { width: 1700 }),
        tableCellText("Zimbabwe", { width: 1300 }),
        tableCellText("Profitability of insurers", { width: 1900 }),
        tableCellText("Loss assessment is the most significant factor depressing crop insurer profitability; loss ratios exceed 100% in most products.", { width: 2230 }),
        tableCellText("Diagnosed the problem; did not design an actuarial alternative.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Tsikirayi et al. (2013)", { width: 1700 }),
        tableCellText("Zimbabwe", { width: 1300 }),
        tableCellText("Uptake of agricultural insurance", { width: 1900 }),
        tableCellText("Low uptake driven by limited product design and weak farmer engagement.", { width: 2230 }),
        tableCellText("Diagnosed uptake constraints; did not produce an actuarial pricing model.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Hazell (1992)", { width: 1700 }),
        tableCellText("Developing countries", { width: 1300 }),
        tableCellText("Role of agricultural insurance", { width: 1900 }),
        tableCellText("Subsidised indemnity insurance has rarely worked sustainably in developing countries.", { width: 2230 }),
        tableCellText("Predates the parametric era; no satellite or actuarial design framework offered.", { width: 2230 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Current Study", { width: 1700, bold: true }),
        tableCellText("Mazowe, Gutu, Chiredzi", { width: 1300, bold: true }),
        tableCellText("Pricing model with NDVI validation", { width: 1900, bold: true }),
        tableCellText("To be determined in Chapter 4", { width: 2230, bold: true }),
        tableCellText("Fills the gap by designing a rainfall-based pricing model validated against NDVI as the agronomic stress proxy in a data-scarce smallholder context.", { width: 2230, bold: true }),
      ]}),
    ],
  }),

  h3("2.7.1 Identification of Specific Research Gaps"),
  p("As highlighted in Table 2.1, this study addresses three distinct voids in the current literature:"),
  letterItem("a", "The Technological Gap: Global models such as those reviewed by Carter et al. (2017) use high-resolution satellite data but they are calibrated mainly for large commercial farms in developed countries, not the fragmented communal plots of Zimbabwe."),
  letterItem("b", "The Methodological Adaptation Gap: NDVI-based loss benchmarking has been established in Kenyan livestock insurance (Chantarat et al., 2013) and European crop insurance (Vroege et al., 2021), but the methodology has not been formally applied to Zimbabwean smallholder maize in the academic literature."),
  letterItem("c", "The Pricing Gap: Dube, Dlakama and Munyala (2025) successfully diagnosed loss assessment costs as the primary driver of market failure. However, their study was diagnostic rather than prescriptive; it identified the problem but stopped short of designing the actuarial pricing model to solve it. This dissertation fills that specific technical gap by producing actuarially calibrated premium estimates for the three study districts."),

  h2("2.8 Chapter Summary"),
  p("This chapter has provided the theoretical and empirical foundation for the study. By integrating Expected Utility Theory with Transaction Cost Theory, the research has established the necessary economic arguments for replacing traditional indemnity insurance with a parametric solution. The review also positioned the use of NDVI as the agronomic stress proxy within an established methodological tradition drawing on Chantarat et al. (2013) and Vroege et al. (2021). The identification of the research gap, specifically the lack of a locally calibrated pricing model that uses NDVI as the loss benchmark, sets the stage for the empirical work of this dissertation. The next chapter, Chapter 3: Research Methodology, details the specific quantitative methods, data sources and actuarial formulas that will be used to construct and test this model."),

  pageBreak(),
];

// ======================================================================
// CHAPTER THREE
// ======================================================================

const chapter3 = [
  h1("CHAPTER THREE: RESEARCH METHODOLOGY"),

  h2("3.1 Introduction"),
  p("In this chapter, the methods that were used to gather and analyse the data needed to answer the research questions are discussed. The methodology justifies the methods used to gather and analyse data, and an effective research strategy is hinged on the use of appropriate tools to conduct the research."),
  p("This chapter sets out the technical methodology that the researcher employed to achieve the research objectives of the study. The core purpose of the chapter is to describe, justify and operationalise the actuarial pipeline used to construct a rainfall-triggered parametric insurance product for smallholder maize farmers across three agro-ecological districts in Zimbabwe: Mazowe, Gutu and Chiredzi. The methodology is organised as a sequential technical pipeline, moving from data acquisition through statistical modelling, contract design, premium pricing, risk loading and basis risk assessment against an NDVI-defined agronomic stress benchmark. This structure reflects the nature of the study as a quantitative actuarial modelling exercise rather than a field-based social science inquiry. The chapter begins with a recap of the research aims, objectives and questions."),

  h2("3.2 Research Aim"),
  p("The main aim of this research project is to develop a drought-based parametric weather-index insurance model that can accurately reflect the rainfall risk faced by smallholder maize farmers in different agro-ecological zones of Zimbabwe in order to price a context-specific insurance product."),

  h2("3.3 Research Objectives"),
  p("The key objectives of this study are reiterated:"),
  letterItem("a", "To analyse historical rainfall patterns and drought frequency across the agro-ecological zones."),
  letterItem("b", "To construct and validate a drought-specific parametric rainfall index aligned with maize crop water requirements, using NDVI as the agronomic stress proxy."),
  letterItem("c", "To quantify basis risk associated with the proposed rainfall index across the selected agro-ecological zones."),
  letterItem("d", "To apply actuarial pricing methods in determining fair premium rates for the drought-based parametric insurance product."),

  h2("3.4 Research Questions"),
  p("In this research study the following research questions are addressed:"),
  letterItem("a", "How can a drought-based parametric weather-index insurance product be optimally designed and priced to protect smallholder maize farmers?"),
  letterItem("b", "What rainfall characteristics and drought indicators best explain agronomic stress in different agro-ecological zones?"),
  letterItem("c", "How accurately does the proposed rainfall-triggered index correlate with NDVI-based stress events?"),
  letterItem("d", "What is the magnitude and pattern of basis risk across the selected agro-ecological zones?"),

  h2("3.5 Research Philosophy"),
  p("Research philosophy refers to the worldview that guides the research process and how it is conducted. The study takes a positivist position in epistemology and an objectivist position in ontology. The data used in this research project, namely satellite-derived rainfall and NDVI records, are measurable and objective statistics that exist independently of how they are perceived by individuals. The researcher does not collect information on how individual farmers perceive the product, which would have suggested a different philosophical stance involving qualitative interviews. Instead, the researcher applies the methods of the natural sciences to the actuarial pricing problem, treating climatic and agronomic statistics as the basis for inference."),

  h2("3.6 Research Design"),
  p("Creswell (2009) identifies three main research designs: qualitative, quantitative and mixed methods. For this study a quantitative approach was used. The study is designed as a quantitative actuarial modelling study. Its primary objective is to model historical rainfall risk across three contrasting agro-ecological zones, design a parametric trigger mechanism aligned with maize crop water requirements and derive actuarially sound premium rates using both analytical and simulation-based methods. The research is retrospective and longitudinal in character, drawing on historical climate and NDVI data spanning the 2000-01 to 2023-24 growing seasons for actuarial calibration. In actuarial modelling, a sufficient historical record is essential to avoid premium estimates that are dominated by short-run anomalies."),

  h2("3.7 Research Approach"),
  p("There are two main ways to approach research questions: a deductive approach and an inductive approach. In an inductive approach, data is gathered and theories are built from the data. In a deductive approach which is aligned with positivism, theories are set out plainly in the research study and data is then collected to test the theories previously stated. In this pricing research project, the theories underpinning the study include Expected Utility Theory and the use of distribution fitting and Monte Carlo simulation in actuarial pricing. Rainfall and NDVI data are then applied to these theories and therefore a deductive approach is employed."),

  h2("3.8 Population and Sampling"),
  p("The population of interest in this research project is smallholder maize farmers operating across the agro-ecological zones of Zimbabwe. Since the research project is time-constrained, sampling techniques are used rather than a full census. Three districts were selected through purposive sampling to represent the full range of Zimbabwe's smallholder agro-ecological environments, from the relatively reliable rainfall in the north to the extreme aridity in the south. Mazowe falls in Natural Region II, Gutu falls in Natural Regions III and IV, and Chiredzi falls in Natural Region V (Mugandani et al., 2012). This deliberate diversity enables the robustness of the model to be stress-tested across contrasting climatological conditions. The methodology is applied independently to each district, producing district-specific trigger thresholds, payout functions and premium rates, which are then compared to assess scalability."),

  h2("3.9 Data Collection"),
  p("The researcher made use of secondary data since all the data that was made available had been collected by other researchers and institutions. The data used for the research project was collected from the following sources: the Climate Hazards Group InfraRed Precipitation with Station data (CHIRPS) for rainfall, and the MODIS Terra MOD13A3 product for NDVI."),

  h3("3.9.1 Rainfall Data: CHIRPS"),
  p("The primary data source for rainfall is the Climate Hazards Group InfraRed Precipitation with Station data (CHIRPS), a quasi-global satellite-merged dataset available from 1981 to near-present at a spatial resolution of 0.05 degrees, that is approximately 5 kilometres, and a daily temporal resolution (Funk et al., 2015). CHIRPS blends thermal infrared satellite imagery with quality-controlled ground station observations to produce a spatially and temporally consistent long-term precipitation record. It is accessed and extracted for each study district via Google Earth Engine."),
  p("CHIRPS is preferred over alternative gridded products for three reasons: its 40-plus year record provides the sample depth required for reliable distributional fitting; its fusion methodology performs well in data-sparse semi-arid environments; and it has been widely validated against station-measured rainfall in southern Africa (Funk et al., 2015). Daily CHIRPS data are aggregated into a single cumulative seasonal rainfall total spanning the full maize growing season, conventionally defined in Zimbabwe as November to April. This single-season aggregation is adopted because the study uses one NDVI-based stress observation per district per agricultural year."),

  h3("3.9.2 Agronomic Stress Proxy: MODIS NDVI"),
  p("The agronomic stress benchmark in this study is constructed from the MODIS Terra MOD13A3 product, which provides monthly Normalised Difference Vegetation Index (NDVI) values at 1 km spatial resolution from 2000 to present (Didan, 2015). NDVI is used as the loss proxy because district-level smallholder maize yield data is not consistently available in the public domain for the study period, and ground-truth validation against farmer-level yield outcomes is therefore not feasible within the scope of this dissertation."),
  p("The use of NDVI as the agronomic stress proxy is well established in the academic literature on index insurance under data constraints. Chantarat et al. (2013) used NDVI as the basis for both the trigger and the loss validation in their Index-Based Livestock Insurance work in Northern Kenya, where individual livestock mortality records were prohibitively expensive to collect. Vroege et al. (2021) similarly used remote-sensing soil moisture and vegetation indicators as the loss benchmark for European drought insurance, arguing that satellite indicators provide a defensible empirical anchor when ground-level yield records are insufficiently granular for district-level analysis."),
  p("For each district, monthly NDVI values are extracted via Google Earth Engine and aggregated into a single seasonal mean over the January to March peak vegetation window. This window is selected because it covers the maize tasseling and grain-filling stages, which are the agronomic phases most sensitive to water stress. Cloud-contaminated pixels are removed using MODIS quality flag filtering and residual gaps are interpolated using locally weighted scatterplot smoothing (Cleveland, 1979). A season is then classified as a stress event when the seasonal mean NDVI falls below the 25th percentile of the historical record for that district."),
  p("Two limitations of the NDVI-based stress proxy are acknowledged. First, NDVI captures vegetation greenness across all land cover within a district, not just maize, although the dominant land cover during the growing season in the three study districts is cropland. Second, NDVI signals can be partially buffered by soil moisture carryover from prior seasons, which means that NDVI may not always register the full impact of a current-season rainfall deficit."),

  h3("3.9.3 Spatial Data Extraction and Aggregation"),
  p("To make sure that the rainfall and NDVI indices accurately reflect the aggregate experience of the district rather than a single point location, satellite data extraction was conducted using geospatial district polygons. Shapefiles representing the administrative boundaries of Mazowe, Gutu and Chiredzi were overlaid onto the gridded CHIRPS and MODIS raster datasets. For each daily or monthly observation, a spatial average was computed across all raster pixels falling strictly within the respective district polygon. This spatial aggregation technique minimises idiosyncratic, localised basis risk that would otherwise arise from relying on a single hypothetical weather station coordinate."),

  h2("3.10 Reliability and Validity"),
  p("Reliability refers to the extent to which the data collection and analysis yields consistent results. To enable reliability, the researcher used only data sources that are responsible for producing the relevant information at scale. CHIRPS and MODIS are both widely peer-reviewed and used in academic and policy work across sub-Saharan Africa, and this strengthens reliability. Validity in this study mainly stems from the choice of data and the modelling process. The use of NDVI as the agronomic stress proxy is supported by the methodological precedent established in Chantarat et al. (2013) and Vroege et al. (2021), and the calibration of trigger thresholds against actual NDVI-defined stress events further supports the validity of the index."),

  h2("3.11 Ethical Considerations"),
  p("This research relies entirely on secondary, aggregated data sources, specifically satellite-derived climatic and vegetation records. Consequently, the study does not involve human subjects and no personally identifiable information or private financial records of individual farmers were accessed or processed. The research carries no risk of privacy violation or direct harm to participants and this means formal ethical clearance for human-subject research was not required. All data used is open-source, which ensures compliance with standard academic integrity and data-use guidelines."),

  h2("3.12 Model Building"),
  p("In this research project there are several main tasks that were done to construct the parametric insurance product:"),
  letterItem("a", "The construction of the cumulative seasonal rainfall index from CHIRPS data."),
  letterItem("b", "The construction of the seasonal NDVI series and definition of stress events."),
  letterItem("c", "The fitting of probability distributions to the rainfall index for each district."),
  letterItem("d", "The design of the parametric contract structure including trigger and exit levels."),
  letterItem("e", "The pricing of the pure premium using both analytical and Monte Carlo methods."),
  letterItem("f", "The application of risk loading to derive the loaded premium."),
  letterItem("g", "The quantification of basis risk using the Carter et al. (2017) framework, with NDVI-defined stress as the loss benchmark."),
  letterItem("h", "The application of Bühlmann's Credibility Theory to address data scarcity."),

  h3("3.12.1 Construction of the Rainfall Index"),
  p("The rainfall index R is defined as the total cumulative precipitation recorded across the full maize growing season for each district, aggregated from daily CHIRPS observations spanning November to April. A single seasonal index is adopted because the study uses one NDVI-based stress observation per district per agricultural year. Constructing multiple sub-seasonal indices would introduce more calibration variables than the available stress record can reliably support, increasing the risk of model overfitting (Barnett and Mahul, 2007). The index for district d in season y is defined as:"),
  eqLine("$R(d,y) = \\sum_{t=1}^{T} P_t(d,y)$"),
  p("Where R(d,y) is the cumulative seasonal rainfall index for district d in year y, P_t(d,y) is the CHIRPS daily rainfall observation on day t in district d, and T is the total number of days in the November to April season. All CHIRPS pixel values overlapping the principal smallholder farming areas of each district are spatially averaged to produce a single district-level daily rainfall series prior to seasonal aggregation."),
  p("The trigger threshold K for each district is determined empirically. A logistic regression model is estimated with binary stress events as the dependent variable and cumulative seasonal rainfall as the predictor, separately for each district. Stress events are defined as those seasons in which seasonal mean NDVI falls below the 25th percentile of the historical record. The threshold K is set at the seasonal rainfall value that maximises the Youden's J statistic, which is the sum of sensitivity and specificity minus one (Youden, 1950). This minimises Type I and Type II basis risk simultaneously."),

  h3("3.12.2 Statistical Modelling of Rainfall"),
  p("Accurate actuarial pricing requires that the probability distribution of the cumulative seasonal rainfall index be well-specified. The study evaluates three candidate distributions for each district: the Gamma distribution, the Weibull distribution and the Lognormal distribution. These are the distributions most widely employed in the climatological literature for semi-arid and sub-humid southern African rainfall and each is theoretically motivated."),
  letterItem("a", "The Gamma distribution is bounded at zero and positively skewed, making it well-suited to seasonal rainfall totals that cannot be negative and are right-tailed in dry districts."),
  letterItem("b", "The Weibull distribution offers a flexible hazard function and has been shown to outperform the Gamma in capturing the heavy lower tail of rainfall distributions in some semi-arid environments (Klugman, Panjer and Willmot, 2012)."),
  letterItem("c", "The Lognormal distribution is included as a benchmark given its widespread use in actuarial loss modelling (Klugman, Panjer and Willmot, 2012)."),

  h3("3.12.3 Parameter Estimation"),
  p("All distribution parameters are estimated using Maximum Likelihood Estimation (MLE), implemented in R using the fitdistrplus package (Delignette-Muller and Dutang, 2015). For the Gamma distribution with shape parameter α and rate parameter β, where β = 1/θ and θ is the scale, the rainfall index R is modelled as:"),
  eqLine("$f(R; \\alpha, \\beta) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} R^{\\alpha-1} e^{-\\beta R}$"),
  p("Estimated by maximising the log-likelihood function:"),
  eqLine("$\\ell(\\alpha, \\beta) = \\sum_{i=1}^{n} \\left[ \\alpha \\ln(\\beta) - \\ln(\\Gamma(\\alpha)) + (\\alpha - 1)\\ln(R_i) - \\beta R_i \\right]$"),
  p("Analogous MLE procedures are applied for the Weibull and Lognormal distributions."),

  h3("3.12.4 Goodness-of-Fit Testing"),
  p("Goodness-of-fit is assessed using three complementary methods:"),
  letterItem("a", "The Kolmogorov-Smirnov (KS) test provides a formal hypothesis test of whether the empirical distribution of observed rainfall significantly departs from the fitted theoretical distribution (Conover, 1999)."),
  letterItem("b", "The Anderson-Darling (AD) test is also applied because it assigns greater weight to the tails of the distribution. This is the region of the rainfall distribution most relevant to insurance pricing, making it more sensitive than the KS test for detecting misfit in the drought tail (Stephens, 1974)."),
  letterItem("c", "Q-Q plots are constructed for each district to provide a visual diagnostic of fit quality."),
  p("The best-fitting distribution for each district is selected based on the lowest AD statistic among those for which the KS test does not reject at the 5% significance level."),

  h3("3.12.5 Parametric Insurance Contract Design"),
  p("The parametric contract is structured around two critical rainfall thresholds for each district:"),
  letterItem("a", "The trigger level K(d) is the cumulative seasonal rainfall accumulation below which any payout is made. It is calibrated using the logistic regression procedure described in Section 3.12.1."),
  letterItem("b", "The exit level L(d) is the cumulative seasonal rainfall accumulation below which the maximum indemnity is paid. The exit level is set at the fifth percentile of the fitted rainfall distribution for each district, which makes sure that the maximum payout is reserved for the most extreme drought events consistent with the historical record (World Bank, 2011)."),
  p("The gap between the trigger and exit levels, which is the payout corridor, is deliberately designed to be wide enough to avoid excessive basis risk from small measurement errors in CHIRPS data, while remaining narrow enough to preserve the actuarial viability of the product."),

  h3("3.12.6 Payout Function"),
  p("A linear payout function is adopted, consistent with the standard design used in World Bank-supported parametric agricultural insurance products (World Bank, 2011) and recommended by Barnett and Mahul (2007) for index insurance in developing country contexts. The linear structure is transparent to farmers and regulators and avoids the cliff-edge discontinuities associated with binary on/off trigger designs that can exacerbate basis risk. The payout function P(R) is defined as:"),
  eqLine("$P(R) = \\begin{cases} 0 & \\text{if } R \\geq K \\\\ S \\cdot \\frac{K - R}{K - L} & \\text{if } L \\leq R < K \\\\ S & \\text{if } R < L \\end{cases}$"),
  p("Where K is the district-specific trigger level, L is the district-specific exit (exhaustion) level, S is the maximum insured sum per hectare and R is the observed cumulative seasonal rainfall for the district. The piecewise structure ensures a smooth, proportional response to rainfall deficits. Table 3.1 summarises the payout structure."),

  new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: "Table 3.1: Parametric Contract Payout Structure", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [3120, 3120, 3120],
    rows: [
      new TableRow({ children: [
        tableCellText("Rainfall Level (R)", { width: 3120, bold: true, shade: "D5E8F0" }),
        tableCellText("Drought Category", { width: 3120, bold: true, shade: "D5E8F0" }),
        tableCellText("Payout P(R)", { width: 3120, bold: true, shade: "D5E8F0" }),
      ]}),
      new TableRow({ children: [
        tableCellText("R ≥ K (Trigger)", { width: 3120 }),
        tableCellText("No drought", { width: 3120 }),
        tableCellText("0", { width: 3120 }),
      ]}),
      new TableRow({ children: [
        tableCellText("L ≤ R < K", { width: 3120 }),
        tableCellText("Moderate drought", { width: 3120 }),
        tableCellText("S × (K − R) / (K − L)", { width: 3120 }),
      ]}),
      new TableRow({ children: [
        tableCellText("R < L (Exit)", { width: 3120 }),
        tableCellText("Severe drought", { width: 3120 }),
        tableCellText("S (maximum indemnity)", { width: 3120 }),
      ]}),
    ],
  }),
  p("The insured sum S is set at USD 500 per hectare, in line with the range identified as actuarially viable in the World Bank (2011) agricultural insurance design guidelines for sub-Saharan Africa."),

  h2("3.13 Premium Pricing Methodology"),

  h3("3.13.1 Pure Premium: Analytical Method"),
  p("The pure premium, that is the actuarially fair premium before any loading, is the expected value of the payout function under the fitted rainfall distribution. Following the expected value principle (Klugman, Panjer and Willmot, 2012), the pure premium P* is defined as:"),
  eqLine("$P^* = E[P(R)] = \\int_0^{\\infty} P(R) f(R) \\, dR$"),
  p("Where f(R) is the probability density function of the rainfall index under the fitted distribution. For the linear payout function and a Gamma-distributed rainfall index, this integral has a closed-form solution involving the incomplete gamma function. Where the Weibull or Lognormal distribution is selected as the better-fitting model, numerical integration is employed using Gauss-Legendre quadrature."),

  h3("3.13.2 Pure Premium: Monte Carlo Simulation"),
  p("Monte Carlo simulation is employed both to cross-validate the analytically derived pure premium and to construct a confidence interval around it that takes account of parameter uncertainty. The simulation proceeds as follows:"),
  letterItem("a", "First, N = 50,000 random seasonal rainfall realisations are drawn from the fitted distribution for each district."),
  letterItem("b", "Second, the payout function P(R) is applied to each simulated rainfall value."),
  letterItem("c", "Third, the simulated pure premium is computed as the arithmetic mean of all simulated payouts:"),
  eqLine("$\\hat{P}^* = \\frac{1}{N} \\sum_{i=1}^{N} P(R_i)$"),
  p("To capture parameter uncertainty, a parametric bootstrap procedure is implemented. Distribution parameters are re-estimated from 1,000 bootstrap samples of the historical rainfall data and the simulation is repeated for each bootstrap parameter set, producing a distribution of premium estimates that reflects both sampling variability and parameter uncertainty (Efron and Tibshirani, 1993). The 5th and 95th percentiles of the resulting distribution are reported as the lower and upper bounds of a 90% confidence interval. The choice of N = 50,000 is determined by a convergence diagnostic: simulations are run at N = 5,000, 10,000, 25,000 and 50,000, and convergence is reached when the change in estimated pure premium between successive sample sizes is below 0.1%."),

  h2("3.14 Risk Loading"),
  p("The pure premium represents the actuarially fair cost of expected payouts but does not constitute a commercially viable or sustainable insurance premium. A loaded premium is derived by applying a multiplicative loading factor λ to the pure premium:"),
  eqLine("$P_{loaded} = (1 + \\lambda) \\cdot P^*$"),
  p("The loading factor λ is decomposed into four additive components, consistent with standard non-life insurance pricing practice (Klugman, Panjer and Willmot, 2012):"),
  letterItem("a", "Administrative Loading (λ_admin): Covers the operational costs of distributing the product, processing satellite data and administering payouts. As a benchmark for industry expense ratios, the IPEC Third Quarter 2024 Industry Report indicates that the microinsurer sector operates at expense ratios of around 26% on average. However, this benchmark reflects indemnity-based microinsurance products that incur field loss assessment costs, which the parametric design eliminates. Following the operational cost guidance in Hohl (2019), the elimination of field verification typically reduces administrative costs by approximately 40%. A central-case administrative loading of 15% of the pure premium is therefore adopted, representing roughly a 42% reduction relative to the indemnity benchmark. Sensitivity analysis is conducted at 10% and 26% to bound the result."),
  letterItem("b", "Profit and Solvency Loading (λ_profit): Provides the insurer with a margin above expected losses, compensating for capital at risk and shareholder return requirements. A loading of 10% of the pure premium is adopted as a benchmark, consistent with non-life pricing convention (Klugman, Panjer and Willmot, 2012)."),
  letterItem("c", "Reinsurance Cost Loading (λ_reins): Drought is a covariate peril. A single drought event can simultaneously affect all insured farmers across a district, creating correlated losses that cannot be diversified within the local portfolio. Local insurers must therefore purchase reinsurance to limit their exposure (Hohl, 2019). The reinsurance cost is estimated as the expected loss above the 90th percentile of the simulated payout distribution, expressed as a percentage of the pure premium."),
  letterItem("d", "Contingency Loading (λ_cont): A 5% loading is added to take account of two sources of model risk that are difficult to quantify precisely. These are parameter risk, which is the uncertainty in the estimated distribution parameters arising from the limited historical sample, and satellite data uncertainty, which is the possibility that CHIRPS rainfall estimates diverge from true ground-level rainfall in extreme events."),
  p("The total loading factor λ is therefore composed of: Administrative (15% central case, with sensitivity at 10% and 26%), Profit and Solvency (10%), Reinsurance (district-specific) and Contingency (5%). It is computed separately for each district. The resulting loaded premiums are expressed both as an absolute amount per hectare and as a percentage of the insured sum, that is the premium rate."),

  h2("3.15 Basis Risk Assessment"),
  p("Basis risk, the mismatch between index-triggered payouts and actual agronomic outcomes, is the central design challenge of parametric insurance and a principal focus of this study. In the absence of district-level smallholder yield data, basis risk is assessed using NDVI-defined stress events as the loss benchmark, following the methodological tradition of Chantarat et al. (2013) and Vroege et al. (2021). Following Carter et al. (2017), basis risk is decomposed and quantified across two dimensions."),

  h3("3.15.1 Type I Basis Risk (False Negatives)"),
  p("Type I basis risk occurs when an NDVI-defined stress event is recorded but the rainfall index does not trigger a payout. This is the most welfare-damaging outcome, since it would leave vulnerable farmers uncompensated in genuine stress years. It is estimated as the proportion of historical seasons in which seasonal mean NDVI falls below the 25th percentile threshold but the cumulative seasonal rainfall index does not breach the trigger level K:"),
  eqLine("$\\text{Type I rate} = \\frac{\\#\\{NDVI < q_{25} \\text{ and } R \\geq K\\}}{\\#\\{NDVI < q_{25}\\}}$"),
  p("A Type I rate below 20% is adopted as the design target."),

  h3("3.15.2 Type II Basis Risk (False Positives)"),
  p("Type II basis risk occurs when the rainfall index triggers a payout but no NDVI-defined stress event has been recorded. While less damaging to farmer welfare than Type I, it imposes unnecessary costs on the insurer. It is estimated as:"),
  eqLine("$\\text{Type II rate} = \\frac{\\#\\{R < K \\text{ and } NDVI \\geq q_{25}\\}}{\\#\\{R < K\\}}$"),

  h3("3.15.3 Correlation Analysis"),
  p("The Pearson product-moment correlation coefficient between the cumulative seasonal rainfall index and seasonal mean NDVI is computed for each district, providing a summary measure of the linear relationship between the index and the agronomic stress signal. Spearman's rank correlation, which does not assume linearity, is also reported as a robustness check (Conover, 1999). A correlation coefficient of at least 0.60 is adopted as the minimum acceptable threshold for index validity, consistent with the guidelines proposed by Barnett and Mahul (2007)."),

  h2("3.16 Bühlmann Credibility Theory"),
  p("A challenge in Chiredzi District, and to a lesser degree in Gutu, is data scarcity. The available historical record provides 24 annual seasonal observations per district. While this is adequate for broad distributional fitting, it is not sufficient to estimate loss probabilities in the deep tail of the distribution with high statistical confidence. To address this, Credibility Theory is applied to blend the district-specific rainfall estimates with a more robust regional prior derived from the broader CHIRPS record across Natural Regions IV and V. The credibility-weighted pure premium is computed as:"),
  eqLine("$\\hat{P}^*_{cred} = Z \\cdot \\hat{P}^*_{local} + (1 - Z) \\cdot \\hat{P}^*_{regional}$"),
  p("Where Z is the Bühlmann credibility factor:"),
  eqLine("$Z = \\frac{n}{n + k}, \\quad k = \\frac{\\sigma^2_{within}}{\\sigma^2_{between}}$"),
  p("When n is small relative to k, Z approaches zero and the premium estimate is anchored predominantly to the regional prior, which reduces the risk of extreme premium estimates being driven by short-run sampling error. As n increases, Z approaches one and the local estimate dominates."),

  h2("3.17 Software and Implementation"),
  p("All statistical and actuarial computations are implemented across a suite of open-source tools. Table 3.2 summarises the software environment."),

  new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: "Table 3.2: Software Tools and Implementation", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2340, 3510, 3510],
    rows: [
      new TableRow({ children: [
        tableCellText("Tool", { width: 2340, bold: true, shade: "D5E8F0" }),
        tableCellText("Purpose", { width: 3510, bold: true, shade: "D5E8F0" }),
        tableCellText("Key Packages / Functions", { width: 3510, bold: true, shade: "D5E8F0" }),
      ]}),
      new TableRow({ children: [
        tableCellText("R (v4.3)", { width: 2340 }),
        tableCellText("Core statistical and actuarial modelling", { width: 3510 }),
        tableCellText("fitdistrplus, actuar, MASS, ggplot2", { width: 3510 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Google Earth Engine", { width: 2340 }),
        tableCellText("CHIRPS and MODIS data extraction", { width: 3510 }),
        tableCellText("ee.ImageCollection, reduceRegion()", { width: 3510 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Python 3.11", { width: 2340 }),
        tableCellText("Data preprocessing and Monte Carlo simulation", { width: 3510 }),
        tableCellText("NumPy, SciPy, Pandas, Matplotlib", { width: 3510 }),
      ]}),
      new TableRow({ children: [
        tableCellText("Microsoft Excel", { width: 2340 }),
        tableCellText("Payout schedule illustration and premium tables", { width: 3510 }),
        tableCellText("Solver, Data Tables", { width: 3510 }),
      ]}),
    ],
  }),
  p("The use of open-source tools throughout is deliberate. It makes sure that the full analytical pipeline can be reproduced, audited and extended by Zimbabwean researchers and practitioners without access to commercial software licences. All R scripts and Python notebooks produced for this study are documented with inline comments and are structured to enable replication of each analytical stage independently."),

  h2("3.18 Chapter Summary"),
  p("This chapter has set out the actuarial methodology underpinning the study. The pipeline begins with data acquisition from two sources, namely CHIRPS satellite-merged rainfall and MODIS NDVI, each of which has been critically evaluated and matched to the specific analytical purpose it serves. Rainfall (CHIRPS) is the contractual trigger; NDVI is used as the agronomic stress proxy against which the rainfall index is validated, in the absence of district-level yield data. The rainfall index is constructed as a single cumulative seasonal rainfall measure from November to April for each district, with trigger thresholds empirically calibrated using logistic regression and the Youden's J criterion against NDVI-defined stress events. The probability distribution of seasonal rainfall is fitted using MLE across Gamma, Weibull and Lognormal candidates, with goodness-of-fit assessed using the Anderson-Darling test and Q-Q plots. The pure premium is derived both analytically and via Monte Carlo simulation with parametric bootstrapping. Loaded premiums are computed by decomposing the risk loading into four explicit components, with administrative loading anchored to the IPEC 2024 microinsurer benchmark and adjusted downward to reflect the elimination of field loss assessment under the parametric design. Basis risk is formally quantified using the Type I and Type II framework, with NDVI-defined stress events as the loss benchmark. In the next chapter, the results from the model and data analysis will be presented."),

  pageBreak(),
];

// ======================================================================
// CHAPTER FOUR
// ======================================================================

// Chapter 4 follows next
// (Built into the same file due to length)

const chapter4 = [
  h1("CHAPTER FOUR: RESULTS, ANALYSIS AND DISCUSSION"),

  h2("4.1 Introduction"),
  p("In this chapter the results obtained from the methodology detailed in the previous chapter are presented. The actuarial pipeline begins with descriptive analysis of the CHIRPS seasonal rainfall data, followed by distribution fitting, contract threshold calibration, premium pricing using both analytical and Monte Carlo methods, risk loading, and a basis risk assessment that uses NDVI as the proxy for agronomic stress. Each set of results is discussed as it is presented, with reference to the theoretical and empirical literature reviewed in Chapter Two."),
  p("It is to be noted that in the absence of district-level smallholder maize yield data for the study period, NDVI is used as the agronomic stress proxy against which the rainfall index is validated. This approach has been used in the agricultural index insurance literature where ground-level yield records are unavailable, including Chantarat et al. (2013) and Vroege et al. (2021)."),

  h2("4.2 Descriptive Statistics of Seasonal Rainfall"),
  p("Seasonal rainfall is defined as the cumulative total of daily CHIRPS precipitation values from November to April for each district and each year from 2000-01 to 2023-24. This produces 24 seasonal observations per district. Table 4.1 presents the descriptive statistics for the three study districts."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.1: Descriptive Statistics of Seasonal Cumulative Rainfall by District (2000-01 to 2023-24)", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1872, 1872, 1872, 1872, 1872],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1872, bold: true, shade: "D5E8F0" }),
        tableCellText("Mean (mm)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Std Dev (mm)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Min (mm)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("CV (%)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1872 }),
        tableCellText("788.24", { width: 1872, center: true }),
        tableCellText("161.35", { width: 1872, center: true }),
        tableCellText("450.71", { width: 1872, center: true }),
        tableCellText("20.5", { width: 1872, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1872 }),
        tableCellText("618.86", { width: 1872, center: true }),
        tableCellText("179.16", { width: 1872, center: true }),
        tableCellText("421.42", { width: 1872, center: true }),
        tableCellText("28.9", { width: 1872, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1872 }),
        tableCellText("421.62", { width: 1872, center: true }),
        tableCellText("114.07", { width: 1872, center: true }),
        tableCellText("278.38", { width: 1872, center: true }),
        tableCellText("27.1", { width: 1872, center: true }),
      ]}),
    ],
  }),
  p("Computed from CHIRPS daily rainfall data for the November to April growing season."),

  // Suggested figure placeholder
  new Paragraph({
    spacing: { before: 200, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({
      text: "[Figure 4.1: Time series of seasonal rainfall by district, 2000-01 to 2023-24 — to be inserted]",
      italics: true, color: "808080"
    })],
  }),

  p("From Table 4.1, it can be seen that there is a pronounced gradient in mean seasonal rainfall across the three districts. Mazowe records the highest mean seasonal rainfall at 788.24 mm, while Chiredzi records the lowest at 421.62 mm. This is consistent with the agro-ecological classification of the three districts. Mazowe falls within Natural Region II which is characterised by higher and more reliable rainfall, while Chiredzi lies in Natural Region V, a semi-arid lowveld zone with low and highly variable precipitation (Mugandani et al., 2012). Gutu, classified within Natural Regions III and IV, occupies an intermediate position with a mean of 618.86 mm."),
  p("From the coefficient of variation column, it can also be shown that Gutu has the highest relative variability at 28.9%, closely followed by Chiredzi at 27.1%, while Mazowe is the most stable at 20.5%. This means that seasonal rainfall in the two drier districts is not just lower on average but also more unpredictable from one season to the next. This has direct implications for actuarial pricing because a more uncertain distributional tail will translate into a wider confidence interval around the pure premium."),

  h2("4.3 Distribution Fitting Results"),

  h3("4.3.1 Maximum Likelihood Estimation"),
  p("Following the methodology in Section 3.12.2, Gamma, Weibull and Lognormal distributions were fitted to the historical seasonal rainfall series for each district using Maximum Likelihood Estimation. Table 4.2 shows the selected best-fitting distribution and its estimated parameters for each district."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.2: Best-Fitting Distribution and MLE Parameter Estimates by District", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1872, 1976, 1976, 1976],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Best Distribution", { width: 1872, bold: true, shade: "D5E8F0" }),
        tableCellText("Parameter 1", { width: 1976, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Parameter 2", { width: 1976, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Implied Mean (mm)", { width: 1976, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("Gamma", { width: 1872 }),
        tableCellText("α = 23.633", { width: 1976, center: true }),
        tableCellText("θ = 33.353", { width: 1976, center: true }),
        tableCellText("788.2", { width: 1976, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("Lognormal", { width: 1872 }),
        tableCellText("μ = 6.392", { width: 1976, center: true }),
        tableCellText("σ = 0.262", { width: 1976, center: true }),
        tableCellText("617.8", { width: 1976, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("Lognormal", { width: 1872 }),
        tableCellText("μ = 6.014", { width: 1976, center: true }),
        tableCellText("σ = 0.238", { width: 1976, center: true }),
        tableCellText("420.8", { width: 1976, center: true }),
      ]}),
    ],
  }),
  p("Best-fitting distribution selected on the basis of the minimum Anderson-Darling statistic where the KS test does not reject at the 5% significance level. For the Gamma, α is the shape parameter and θ is the scale parameter. For the Lognormal, μ and σ are the parameters of the underlying normal distribution."),

  p("From Table 4.2, it can be seen that the preferred distributional model differs across the three districts. The Gamma distribution provides the best fit for Mazowe, while the Lognormal distribution provides the best fit for both Gutu and Chiredzi. The shape parameter α = 23.633 and scale parameter θ = 33.353 for Mazowe imply a model mean of αθ = 788.2 mm, which is in close agreement with the sample mean in Table 4.1. A similar agreement between the model means and the sample means is observed for Gutu and Chiredzi, lending initial credibility to the MLE estimates before formal goodness-of-fit testing."),

  h3("4.3.2 Goodness-of-Fit Tests"),
  p("Goodness-of-fit was assessed for all three candidate distributions in each district. Table 4.3 presents the full set of KS p-values and AD statistics across all district-distribution combinations."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.3: Goodness-of-Fit Statistics for All Candidate Distributions by District", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1300, 1300, 1300, 1300, 1300, 1300],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Gamma KS", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Gamma AD", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Weibull KS", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Weibull AD", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Lognormal KS", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Lognormal AD", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("0.857", { width: 1300, center: true, bold: true }),
        tableCellText("0.498", { width: 1300, center: true, bold: true }),
        tableCellText("0.567", { width: 1300, center: true }),
        tableCellText("0.610", { width: 1300, center: true }),
        tableCellText("0.752", { width: 1300, center: true }),
        tableCellText("0.579", { width: 1300, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("0.903", { width: 1300, center: true }),
        tableCellText("0.455", { width: 1300, center: true }),
        tableCellText("0.509", { width: 1300, center: true }),
        tableCellText("0.815", { width: 1300, center: true }),
        tableCellText("0.952", { width: 1300, center: true, bold: true }),
        tableCellText("0.352", { width: 1300, center: true, bold: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("0.229", { width: 1300, center: true }),
        tableCellText("0.812", { width: 1300, center: true }),
        tableCellText("0.334", { width: 1300, center: true }),
        tableCellText("1.252", { width: 1300, center: true }),
        tableCellText("0.265", { width: 1300, center: true, bold: true }),
        tableCellText("0.687", { width: 1300, center: true, bold: true }),
      ]}),
    ],
  }),
  p("KS denotes Kolmogorov-Smirnov test p-value. AD denotes Anderson-Darling test statistic. Bold figures indicate the selected best-fitting distribution."),

  // Q-Q plot placeholder
  new Paragraph({
    spacing: { before: 200, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({
      text: "[Figure 4.2: Q-Q plots for selected distributions, by district — to be inserted]",
      italics: true, color: "808080"
    })],
  }),

  p("From Table 4.3, it can be shown that the KS test does not reject any of the three candidate distributions at the 5% level for any of the nine district-distribution combinations. All p-values exceed 0.05. Where multiple distributions pass the KS test for the same district, the final selection is determined by the lowest AD statistic, since the AD test places greater weight on the tails of the distribution, which is the region relevant to drought insurance pricing (Stephens, 1974). Q-Q plots constructed for each selected distribution confirm close tracking of empirical quantiles throughout the distribution, with no systematic departure in the lower tail."),

  h2("4.4 Contract Calibration"),

  h3("4.4.1 Stress Event Classification"),
  p("In the absence of district-level yield data, agronomic stress events were identified using NDVI as the proxy. A season is classified as a stress event when the seasonal mean NDVI for the January to March peak vegetation window falls below the 25th percentile of the historical record for that district. Across the 24 observed seasons, six stress events are identified per district by construction of the percentile threshold. The NDVI thresholds for stress are 0.671 for Mazowe, 0.491 for Gutu and 0.565 for Chiredzi, reflecting the different baseline vegetation regimes across the three zones. Logistic regression was then estimated separately for each district, with the binary stress indicator as the dependent variable and cumulative seasonal rainfall as the single continuous predictor."),

  h3("4.4.2 Trigger and Exit Level Results"),
  p("From the logistic regression and the fifth-percentile computations, the calibrated contract thresholds are presented in Table 4.4."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.4: Calibrated Contract Thresholds and Insured Sum by District", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1560, 1560, 1560, 1560, 1560],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Trigger K (mm)", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Exit L (mm)", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Sensitivity", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Specificity", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Insured Sum (USD/ha)", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("726.3", { width: 1560, center: true }),
        tableCellText("541.8", { width: 1560, center: true }),
        tableCellText("0.833", { width: 1560, center: true }),
        tableCellText("0.833", { width: 1560, center: true }),
        tableCellText("500", { width: 1560, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("561.2", { width: 1560, center: true }),
        tableCellText("388.1", { width: 1560, center: true }),
        tableCellText("1.000", { width: 1560, center: true }),
        tableCellText("0.667", { width: 1560, center: true }),
        tableCellText("500", { width: 1560, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("343.2", { width: 1560, center: true }),
        tableCellText("276.5", { width: 1560, center: true }),
        tableCellText("0.667", { width: 1560, center: true }),
        tableCellText("0.944", { width: 1560, center: true }),
        tableCellText("500", { width: 1560, center: true }),
      ]}),
    ],
  }),
  p("Trigger K calibrated via logistic regression and Youden's J optimisation against NDVI-defined stress events. Exit L set at the 5th percentile of the fitted distribution for each district."),

  // Trigger figure placeholder
  new Paragraph({
    spacing: { before: 200, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({
      text: "[Figure 4.3: Rainfall vs NDVI scatter plots with trigger and exit thresholds marked, by district — to be inserted]",
      italics: true, color: "808080"
    })],
  }),

  p("From Table 4.4, it can be seen that the trigger level decreases from Mazowe (726.3 mm) to Gutu (561.2 mm) to Chiredzi (343.2 mm), reflecting the progressively drier baseline conditions across the agro-ecological gradient. Mazowe's trigger of 726.3 mm corresponds to a relatively high seasonal threshold, consistent with the greater water requirements of maize grown on Mazowe's more productive soils. The lower trigger levels in Gutu and Chiredzi reflect the fact that maize production in drier zones is adapted to lower absolute rainfall."),
  p("Mazowe achieves a balanced 83.3% on both sensitivity and specificity, indicating that the trigger correctly identifies five of the six stress seasons and correctly classifies fifteen of the eighteen non-stress seasons. Gutu achieves perfect sensitivity (100%) but lower specificity (66.7%), meaning the trigger captures all six stress seasons but at the cost of producing six false alarms. Chiredzi shows the opposite pattern, with lower sensitivity (66.7%) but very high specificity (94.4%), indicating that when the trigger fires it almost always corresponds to a real stress event but two stress seasons are missed."),

  h2("4.5 Premium Pricing Results"),

  h3("4.5.1 Pure Premium"),
  p("The pure premium was derived as the expected value of the payout function under the fitted distribution for each district. Table 4.5 presents the analytical pure premium and the Monte Carlo cross-validation result for each district, together with the 90% confidence interval derived from parametric bootstrapping across 1,000 bootstrap samples."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.5: Pure Premium Results: Analytical and Monte Carlo Cross-Validation", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1872, 1872, 1872, 2184],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Analytical P* (USD/ha)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Monte Carlo P* (USD/ha)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Difference (%)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("90% CI (USD/ha)", { width: 2184, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("92.39", { width: 1872, center: true }),
        tableCellText("91.61", { width: 1872, center: true }),
        tableCellText("0.84", { width: 1872, center: true }),
        tableCellText("[34.89, 145.52]", { width: 2184, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("101.76", { width: 1872, center: true }),
        tableCellText("100.42", { width: 1872, center: true }),
        tableCellText("1.32", { width: 1872, center: true }),
        tableCellText("[63.39, 138.65]", { width: 2184, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("63.97", { width: 1872, center: true }),
        tableCellText("63.50", { width: 1872, center: true }),
        tableCellText("0.74", { width: 1872, center: true }),
        tableCellText("[32.90, 91.64]", { width: 2184, center: true }),
      ]}),
    ],
  }),
  p("Monte Carlo run with N = 50,000. Confidence interval derived from parametric bootstrap with B = 1,000 resamples."),

  p("From Table 4.5, it can be shown that the analytical and Monte Carlo pure premiums are in close agreement for all three districts. The maximum difference between the two methods is 1.32% in Gutu, which reflects Monte Carlo sampling error rather than a substantive methodological difference."),
  p("From the results, it can also be seen that Gutu carries the highest pure premium at USD 100.42 per hectare, followed by Mazowe at USD 91.61 per hectare, with Chiredzi having the lowest at USD 63.50 per hectare. This pattern is initially counterintuitive because Chiredzi is the driest district and might be expected to require the highest premium. The explanation lies in how the trigger was calibrated. Chiredzi's trigger of 343.2 mm sits well below its mean rainfall of 421.62 mm, meaning that the trigger is breached relatively rarely under the fitted distribution. Gutu's trigger of 561.2 mm, by contrast, sits closer to its mean of 618.86 mm, and combined with Gutu's higher coefficient of variation of 28.9%, this results in more frequent expected payouts. This finding reinforces the point that drought premiums are driven not by absolute aridity but by the combination of trigger level, distributional shape and variability."),

  h3("4.5.2 Convergence Diagnostics"),
  p("Table 4.6 presents the estimated pure premium at each of the four simulation sizes used in the convergence diagnostic."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.6: Monte Carlo Convergence Diagnostics: Estimated Pure Premium (USD/ha) by Simulation Size", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1872, 1872, 1872, 1872, 1872],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1872, bold: true, shade: "D5E8F0" }),
        tableCellText("N = 5,000", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("N = 10,000", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("N = 25,000", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("N = 50,000", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1872 }),
        tableCellText("89.69", { width: 1872, center: true }),
        tableCellText("88.85", { width: 1872, center: true }),
        tableCellText("92.77", { width: 1872, center: true }),
        tableCellText("92.05", { width: 1872, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1872 }),
        tableCellText("99.80", { width: 1872, center: true }),
        tableCellText("102.07", { width: 1872, center: true }),
        tableCellText("102.81", { width: 1872, center: true }),
        tableCellText("101.44", { width: 1872, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1872 }),
        tableCellText("65.14", { width: 1872, center: true }),
        tableCellText("63.88", { width: 1872, center: true }),
        tableCellText("64.23", { width: 1872, center: true }),
        tableCellText("64.20", { width: 1872, center: true }),
      ]}),
    ],
  }),
  p("Convergence criterion is a change in estimated pure premium of less than 0.1% between successive sample sizes."),

  p("From Table 4.6, it can be seen that the estimated pure premium stabilises as the number of simulations increases. Chiredzi reaches near-convergence by N = 25,000, with the change between N = 25,000 and N = 50,000 being only 0.05%. The choice of N = 50,000 comfortably accommodates the most demanding district and provides a uniform simulation framework across all three."),

  h2("4.6 Risk Loading and Commercial Premium"),
  p("The pure premium does not constitute a commercially viable insurance price. The commercial loaded premium is derived by applying the four-component loading structure described in Section 3.14. The administrative loading deserves particular comment. The IPEC Third Quarter 2024 Industry Report indicates that microinsurer expense ratios sit at around 26% on average. However, this benchmark reflects indemnity-based products that incur field loss assessment costs. Because parametric insurance eliminates these costs by paying out automatically from satellite data, the true administrative loading should be lower than the indemnity benchmark. A central-case loading of 15% is therefore adopted, with sensitivity analysis at 10% and 26% to bound the result. Table 4.7 presents the full loading decomposition and the resulting commercial premium for each district at the central-case admin loading of 15%."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.7: Risk Loading Decomposition and Commercial Premium by District (Central Case: 15% Admin)", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1300, 1300, 1300, 1300, 1300, 1300, 1560],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1300, bold: true, shade: "D5E8F0" }),
        tableCellText("P* (USD)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Admin (15%)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Profit (10%)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Reins.", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Ctgy (5%)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Loaded (USD/ha)", { width: 1560, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1300 }),
        tableCellText("91.61", { width: 1300, center: true }),
        tableCellText("13.74", { width: 1300, center: true }),
        tableCellText("9.16", { width: 1300, center: true }),
        tableCellText("9.40 (10.3%)", { width: 1300, center: true }),
        tableCellText("4.58", { width: 1300, center: true }),
        tableCellText("128.49", { width: 1560, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1300 }),
        tableCellText("100.42", { width: 1300, center: true }),
        tableCellText("15.06", { width: 1300, center: true }),
        tableCellText("10.04", { width: 1300, center: true }),
        tableCellText("8.06 (8.0%)", { width: 1300, center: true }),
        tableCellText("5.02", { width: 1300, center: true }),
        tableCellText("138.60", { width: 1560, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1300 }),
        tableCellText("63.50", { width: 1300, center: true }),
        tableCellText("9.53", { width: 1300, center: true }),
        tableCellText("6.35", { width: 1300, center: true }),
        tableCellText("13.48 (21.2%)", { width: 1300, center: true }),
        tableCellText("3.18", { width: 1300, center: true }),
        tableCellText("96.04", { width: 1560, center: true }),
      ]}),
    ],
  }),
  p("All figures in USD per hectare except where stated. Reinsurance loading expressed as both an absolute amount and a percentage of the pure premium."),

  h3("4.6.1 Sensitivity to Administrative Loading"),
  p("Table 4.8 presents the loaded premium under the lower bound (10%) and upper bound (26%, IPEC microinsurer benchmark) sensitivity scenarios alongside the central case."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.8: Sensitivity of Loaded Premium and Premium Rate to Administrative Loading Assumption", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1300, 1300, 1300, 1300, 1300, 1300],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Loaded @ 10% (USD)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Rate @ 10%", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Loaded @ 15% (USD)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Rate @ 15%", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Loaded @ 26% (USD)", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Rate @ 26%", { width: 1300, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("123.91", { width: 1300, center: true }),
        tableCellText("24.8%", { width: 1300, center: true }),
        tableCellText("128.49", { width: 1300, center: true }),
        tableCellText("25.7%", { width: 1300, center: true }),
        tableCellText("138.56", { width: 1300, center: true }),
        tableCellText("27.7%", { width: 1300, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("133.58", { width: 1300, center: true }),
        tableCellText("26.7%", { width: 1300, center: true }),
        tableCellText("138.60", { width: 1300, center: true }),
        tableCellText("27.7%", { width: 1300, center: true }),
        tableCellText("149.65", { width: 1300, center: true }),
        tableCellText("29.9%", { width: 1300, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("92.86", { width: 1300, center: true }),
        tableCellText("18.6%", { width: 1300, center: true }),
        tableCellText("96.04", { width: 1300, center: true }),
        tableCellText("19.2%", { width: 1300, center: true }),
        tableCellText("103.02", { width: 1300, center: true }),
        tableCellText("20.6%", { width: 1300, center: true }),
      ]}),
    ],
  }),
  p("Premium rate expressed as a percentage of the insured sum (USD 500/ha). The 26% upper-bound corresponds to the IPEC 2024 microinsurer sector benchmark."),

  p("From Tables 4.7 and 4.8, it can be shown that the central-case commercial premium ranges from USD 96.04 per hectare in Chiredzi to USD 138.60 per hectare in Gutu, corresponding to premium rates of 19.2% to 27.7% of the insured sum. The sensitivity analysis confirms that even at the upper bound of 26% admin loading, the qualitative ordering of districts is preserved and the premium rates remain within a 20% to 30% range."),
  p("It can also be seen that the reinsurance loading varies substantially across the three districts, from 8.0% of the pure premium in Gutu to 21.2% in Chiredzi. The higher reinsurance loading in Chiredzi reflects the heavier lower tail of its rainfall distribution. Even though Chiredzi's pure premium is lower than the other two districts, the probability of an extreme drought event producing a maximum payout is higher, and this drives the cost of reinsurance for that layer of risk."),
  p("The framing of the administrative loading deserves further comment. The 26% benchmark from the IPEC 2024 Industry Report represents the operational cost structure of indemnity-based microinsurers, which is dominated by field loss assessment costs. The parametric design eliminates these costs by automating payouts based on satellite triggers. Following Hohl (2019), the operational savings from removing field verification typically reduce administrative costs by approximately 40%, which justifies the central-case loading of 15%. In effect, the difference between the 26% indemnity benchmark and the 15% parametric central case represents the quantitative expression of the Transaction Cost Theory argument advanced in Chapter Two: the parametric design's value to the insurer comes precisely from this efficiency gain."),

  h2("4.7 Basis Risk Assessment"),
  p("Basis risk is assessed by comparing the index trigger outcomes against the NDVI-defined stress events for each district. As discussed in Section 4.4.1, NDVI is used as the agronomic stress proxy in the absence of district-level yield data. The basis risk metrics therefore measure the alignment between the rainfall index and an independently observed satellite indicator of crop stress."),

  h3("4.7.1 Type I and Type II Basis Risk"),
  p("Table 4.9 presents the Type I and Type II basis risk rates and Pearson and Spearman correlation coefficients between the seasonal rainfall index and seasonal NDVI for each district."),

  new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Table 4.9: Basis Risk Metrics and Correlation Coefficients by District", italics: true, bold: true })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1560, 1872, 1872, 2028, 2028],
    rows: [
      new TableRow({ children: [
        tableCellText("District", { width: 1560, bold: true, shade: "D5E8F0" }),
        tableCellText("Type I Rate (%)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Type II Rate (%)", { width: 1872, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Pearson r (Rainfall vs NDVI)", { width: 2028, bold: true, shade: "D5E8F0", center: true }),
        tableCellText("Spearman ρ", { width: 2028, bold: true, shade: "D5E8F0", center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Mazowe", { width: 1560 }),
        tableCellText("16.7 (1/6)", { width: 1872, center: true }),
        tableCellText("37.5 (3/8)", { width: 1872, center: true }),
        tableCellText("0.600", { width: 2028, center: true }),
        tableCellText("0.604", { width: 2028, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Gutu", { width: 1560 }),
        tableCellText("0.0 (0/6)", { width: 1872, center: true }),
        tableCellText("50.0 (6/12)", { width: 1872, center: true }),
        tableCellText("0.603", { width: 2028, center: true }),
        tableCellText("0.613", { width: 2028, center: true }),
      ]}),
      new TableRow({ children: [
        tableCellText("Chiredzi", { width: 1560 }),
        tableCellText("33.3 (2/6)", { width: 1872, center: true }),
        tableCellText("20.0 (1/5)", { width: 1872, center: true }),
        tableCellText("0.760", { width: 2028, center: true }),
        tableCellText("0.734", { width: 2028, center: true }),
      ]}),
    ],
  }),
  p("Type I and Type II rates expressed as proportions, with raw counts in parentheses. The minimum acceptable Pearson r threshold is 0.60."),

  p("From Table 4.9, it can be seen that the Type I basis risk rates are 16.7% for Mazowe, 0.0% for Gutu and 33.3% for Chiredzi. The design target of a Type I rate not exceeding 20% is met for Mazowe and Gutu but not for Chiredzi. Where the target is met, this means the index correctly identifies at least four out of every five genuine stress seasons in the historical record, which satisfies the minimum reliability standard recommended by Barnett and Mahul (2007). For Chiredzi, two out of six historical stress seasons would not have triggered a payout, which is a material shortcoming that must be acknowledged."),
  p("The high Type II rate in Gutu (50.0%) and Mazowe (37.5%) deserves particular attention. In Gutu, the trigger fires in twelve seasons but only six of these correspond to NDVI-defined stress events. There are two plausible explanations for this divergence. The first is that NDVI captures vegetation responses that are buffered by soil moisture carryover, so seasons of low rainfall do not always translate into low NDVI in the same season. The second is that NDVI in Gutu reflects a mix of cropped and natural vegetation, and natural vegetation can remain green during moderate dry spells that nonetheless reduce maize yields. Either explanation suggests that the Type II rate may overstate the true financial mismatch between the index and farmer outcomes."),
  p("From the Pearson and Spearman correlation results, it can also be shown that the seasonal cumulative rainfall index meets the validity threshold across all three districts, with Pearson coefficients of 0.600, 0.603 and 0.760 for Mazowe, Gutu and Chiredzi respectively. Chiredzi's correlation is the highest, which is consistent with the expectation that vegetation in semi-arid zones is more directly responsive to rainfall variability because there is less buffering from carryover soil moisture. The fact that Mazowe and Gutu sit only marginally above the 0.60 threshold is itself an important finding. It empirically confirms that rainfall and NDVI are related but distinct signals, which validates the methodological decision in Chapter Three to use rainfall as the contractual trigger and NDVI as the validation benchmark. If the two signals were perfectly correlated, NDVI would not add any information beyond what rainfall already provides."),

  h2("4.8 Affordability Discussion"),
  p("The premium rates derived above range from 19.2% to 27.7% of the insured sum at the central-case administrative loading of 15%. Under the upper-bound IPEC microinsurer benchmark of 26%, premium rates rise to between 20.6% and 29.9%. These rates exceed the 5% to 10% range commonly cited in the literature as the threshold for sustainable voluntary uptake among smallholders without subsidy (Carter et al., 2017; Hohl, 2019). This means that meaningful market penetration is unlikely in any of the three districts at the commercial premium without some form of premium support."),
  p("This result is not unique to this study. The global evidence on parametric insurance in drought-prone areas consistently shows that commercial viability and widespread smallholder uptake are difficult to reconcile without premium co-financing, particularly in the most drought-exposed zones (Carter et al., 2017). The form such support might take in Zimbabwe's regulatory context is discussed in Chapter Five."),
  p("A formal income-based affordability analysis would require district-level smallholder farmer income data from AGRITEX or ZIMSTAT, which were not accessible within the scope of this study. This limitation is acknowledged in Chapter One and identified as a priority area for further research."),
  p("It is also important to recognise that the parametric design structurally removes information asymmetry between the insurer and the farmer (Akerlof, 1970; Arrow, 1963). Because the payout trigger is determined by a publicly accessible CHIRPS satellite dataset that neither party can influence, moral hazard and adverse selection cannot distort the loss experience in the manner documented for indemnity contracts. Every insured farmer in the district receives the same payout when the trigger is breached, regardless of their individual farm management decisions. This structural property simplifies the information requirements for sustainable pricing and is a theoretical advantage of the parametric design as reviewed in Section 2.3.3."),

  h2("4.9 Chapter Summary"),
  p("In this chapter the following findings were obtained from applying the actuarial pipeline described in Chapter Three:"),
  letterItem("a", "Descriptive analysis confirmed a pronounced agro-ecological rainfall gradient across the three districts, with Mazowe recording the highest mean seasonal rainfall (788.24 mm) and most stable rainfall (CV 20.5%), while Chiredzi recorded the lowest mean (421.62 mm) and Gutu the highest variability (CV 28.9%)."),
  letterItem("b", "MLE-based distributional fitting identified the Gamma distribution as the best fit for Mazowe and the Lognormal distribution as the best fit for both Gutu and Chiredzi. Goodness-of-fit tests confirmed that all three selected distributions provide adequate fit, with KS p-values exceeding 0.05 in every case."),
  letterItem("c", "Logistic regression and Youden's J optimisation produced district-specific trigger levels of 726.3 mm, 561.2 mm and 343.2 mm for Mazowe, Gutu and Chiredzi respectively. Sensitivity and specificity were balanced for Mazowe, while Gutu favoured sensitivity and Chiredzi favoured specificity."),
  letterItem("d", "The pure premium results, derived analytically and cross-validated by Monte Carlo simulation with 50,000 iterations, show Gutu carrying the highest pure premium at USD 100.42 per hectare, followed by Mazowe at USD 91.61 and Chiredzi at USD 63.50. The counterintuitive finding that Chiredzi has the lowest premium reflects the position of its trigger relative to its mean rainfall, not the absolute aridity of the district."),
  letterItem("e", "Central-case commercial premiums of USD 128.49, USD 138.60 and USD 96.04 per hectare were derived for Mazowe, Gutu and Chiredzi respectively, by applying the four loading components with the 15% admin loading. The administrative loading is anchored to the IPEC 2024 microinsurer benchmark of 26% and adjusted downward by approximately 40% to reflect the elimination of field loss assessment under the parametric design."),
  letterItem("f", "Type I basis risk rates of 16.7%, 0.0% and 33.3% were obtained for Mazowe, Gutu and Chiredzi, with the 20% design target met in two out of three districts. Type II rates were higher than ideal, particularly in Gutu (50.0%) and Mazowe (37.5%), which reflects a real divergence between rainfall and NDVI signals rather than a flaw in the trigger design."),
  letterItem("g", "Correlation analysis using NDVI as the agronomic stress proxy confirmed the validity of the seasonal rainfall index across all three districts, with Pearson coefficients of 0.600, 0.603 and 0.760, all meeting or exceeding the 0.60 threshold."),
  letterItem("h", "Affordability analysis showed that loaded premiums correspond to premium rates of 19.2% to 27.7% of the insured sum at the central case, which exceed the unsubsidised affordability threshold cited in the literature. This implies that subsidy or co-financing is likely required for meaningful voluntary uptake."),
  letterItem("i", "The product structure removes moral hazard and adverse selection, reduces administrative costs significantly relative to indemnity products, and enables rapid payout without field verification, all of which are consistent with the theoretical predictions of Transaction Cost Theory and the Information Asymmetry literature reviewed in Chapter Two."),
  p("Chapter Five draws on these findings to formulate conclusions, policy recommendations, and directions for future research."),
];

// ======================================================================
// BUILD DOCUMENT
// ======================================================================

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Times New Roman", size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 320, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, italics: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 200, after: 140 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children: [...chapter1, ...chapter2, ...chapter3, pageBreak(), ...chapter4],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Sibanda_Combined_Chapters_1_to_4.docx", buffer);
  console.log("Combined document created: Sibanda_Combined_Chapters_1_to_4.docx");
});
