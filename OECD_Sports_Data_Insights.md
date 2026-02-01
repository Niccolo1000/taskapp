# The Exercise Divide: How Gender and Geography Shape Our Daily Sports Habits

## Catchy Framing

**While the world debates work-life balance, a less visible gap persists: the sports gender gap.** From Finnish gyms to Indian fields, men consistently outpace women in daily exercise time - but the size of this gap varies wildly by country, revealing surprising cultural patterns about who gets to play.

---

## Five Insightful One-Liners

### 1. Germany Stands Alone in Gender Equality
**Germany is the ONLY country in the OECD where men and women exercise the exact same amount - 27 minutes per day each.** This unique equality may stem from Germany's strong tradition of Sportvereine (sports clubs) with historically robust programming for both genders and subsidized public fitness facilities.

### 2. The Nordic Paradox
**Despite being fitness-obsessed, Scandinavian countries like Sweden (18 min) and Norway (27 min) actually rank lower than expected on daily sports time.** The reason? Nordic populations integrate physical activity into daily life through active commuting and outdoor recreation that may not be categorized as "sport and exercise" in time-use surveys.

### 3. Portugal's Stunning 14-Minute Gender Gap
**Portuguese men exercise 3.3x longer than women daily (20 vs 6 minutes) - the largest gender disparity in the dataset.** This reflects deeply traditional gender roles where women bear disproportionate household and caregiving burdens, leaving less time for personal fitness.

### 4. India's Women Get Just 60 Seconds of Daily Exercise
**Indian women average just 1 minute of daily sport and exercise - 9x less than men in the same country.** This staggering gap highlights how traditional gender roles, safety concerns for women in public spaces, and lack of female-accessible sports infrastructure create barriers to women's physical activity.

### 5. France: Fit Men, Busy Women
**French men exercise 54% more than French women (37 vs 24 min), despite France's reputation for leisurely living.** The gap reflects the unequal distribution of domestic labor - French women spend significantly more time on cooking, childcare, and housework, leaving less time for personal exercise.

---

## Official Data Source

**OECD Time Use Database**
- Primary Source: https://www.oecd.org/en/data/datasets/time-use-database.html
- Data Explorer: https://data-explorer.oecd.org/vis?df[ds]=DisseminateFinalDMZ&df[id]=DSD_TIME_USE@DF_TIME_USE&df[ag]=OECD.WISE.INE

**Additional Reference:**
- Statista compilation of OECD data: https://www.statista.com/statistics/522015/time-spent-sports-countries/
- OECD Health Working Paper No. 112: "Current and past trends in physical activity in four OECD countries" - https://www.oecd.org/en/publications/current-and-past-trends-in-physical-activity-in-four-oecd-countries_22cad404-en.html

---

## Data Notes

- Age group is 15-64 for all countries except: Australia (15+), Hungary (15-74), Sweden (25-64), and China (15-74)
- "Sports" does not include watching sports as a spectator
- Time use data are normalized to 1440 minutes per day across the OECD
- Survey years range from 1999-2014 depending on country data availability

---

## Google Sheets Link

To import this data into Google Sheets:
1. Open Google Sheets
2. File > Import > Upload the `oecd_sports_exercise_data.csv` file
3. Or use: File > Import > By URL with the raw CSV data

**Recommended Google Sheets Setup:**
- Column A: Country
- Column B: Men (min/day)
- Column C: Women (min/day)
- Column D: Gender Gap (min)
- Column E: Year
- Column F: Data Source
