import skfuzzy as fuzz
import numpy as np
import matplotlib.pyplot as plt
import json

def diagnose_ntd(data):
    from skfuzzy import control as ctrl
    # Membership function for lump amount
    lump_amount = ctrl.Antecedent(np.arange(0, 11, 1), 'lump_amount')
    lump_amount['low'] = fuzz.trapmf(lump_amount.universe, [0, 0, 3, 4])
    lump_amount['high'] = fuzz.trimf(lump_amount.universe, [3, 10, 10])

    # Membership function for lump hardness
    lump_hardness = ctrl.Antecedent(np.arange(0, 11, 1), 'lump_hardness')
    lump_hardness['soft'] = fuzz.trapmf(lump_hardness.universe, [0, 0, 4, 6])
    lump_hardness['solid'] = fuzz.trapmf(lump_hardness.universe, [4, 6, 10, 10])

    # Membership function for lump location
    lump_location = ctrl.Antecedent(np.arange(0, 11, 1), 'lump_location')
    lump_location['localised'] = fuzz.trapmf(lump_location.universe, [0, 0, 4, 6])
    lump_location['widespread'] = fuzz.trapmf(lump_location.universe, [4, 6, 10, 10])

    # Membership function for lump surface
    lump_surface = ctrl.Antecedent(np.arange(0, 11, 1), 'lump_surface')
    lump_surface['smooth'] = fuzz.trapmf(lump_surface.universe, [0, 0, 4, 6])
    lump_surface['bumpy'] = fuzz.trapmf(lump_surface.universe, [4, 6, 10, 10])

    # Membership function for lump itch //ask
    lump_itch = ctrl.Antecedent(np.arange(0, 11, 1), 'lump_itch')
    lump_itch['not itchy'] = fuzz.trimf(lump_itch.universe, [0, 0, 5])
    lump_itch['slightly itchy'] = fuzz.trimf(lump_itch.universe, [2, 5, 8])
    lump_itch['very itchy'] = fuzz.trimf(lump_itch.universe, [5, 10, 10])

    # Membership function for ulcer sensation
    ulcer_sensation = ctrl.Antecedent(np.arange(0, 11, 1), 'ulcer_sensation')
    ulcer_sensation['painful'] = fuzz.trimf(ulcer_sensation.universe, [0, 0, 5])
    ulcer_sensation['not painful'] = fuzz.trimf(ulcer_sensation.universe, [5, 10, 10])

    # Membership function for ulcer edges
    ulcer_edges = ctrl.Antecedent(np.arange(0, 11, 1), 'ulcer_edges')
    ulcer_edges['undermined'] = fuzz.trimf(ulcer_edges.universe, [0, 0, 5])
    ulcer_edges['not undermined'] = fuzz.trimf(ulcer_edges.universe, [5, 10, 10])

    # Membership function for ulcer location
    ulcer_location = ctrl.Antecedent(np.arange(0, 11, 1), 'ulcer_location')
    ulcer_location['localised'] = fuzz.trimf(ulcer_location.universe, [0, 0, 5])
    ulcer_location['widespread'] = fuzz.trimf(ulcer_location.universe, [5, 10, 10])

    # Membership function for ulcer color
    ulcer_color = ctrl.Antecedent(np.arange(0, 11, 1), 'ulcer_color')
    ulcer_color['red'] = fuzz.trimf(ulcer_color.universe, [0, 0, 5])
    ulcer_color['yellow'] = fuzz.trimf(ulcer_color.universe, [5, 10, 10])

    # Membership function for lateral position
    lateral_position = ctrl.Antecedent(np.arange(0, 11, 1), 'lateral_position')
    lateral_position['unilateral'] = fuzz.trimf(lateral_position.universe, [0, 0, 5])
    lateral_position['bilateral'] = fuzz.trimf(lateral_position.universe, [5, 10, 10])

    # Membership function for swollen texture
    swollen_texture = ctrl.Antecedent(np.arange(0, 11, 1), 'swollen_texture')
    swollen_texture['soft'] = fuzz.trimf(swollen_texture.universe, [0, 0, 5])
    swollen_texture['hard'] = fuzz.trimf(swollen_texture.universe, [5, 10, 10])

    # Membership function for swollen location
    swollen_location = ctrl.Antecedent(np.arange(0, 11, 1), 'swollen_location')
    swollen_location['localised'] = fuzz.trimf(swollen_location.universe, [0, 0, 5])
    swollen_location['widespread'] = fuzz.trimf(swollen_location.universe, [5, 10, 10])

    # Membership function for swollen sensation
    swollen_sensation = ctrl.Antecedent(np.arange(0, 11, 1), 'swollen_sensation')
    swollen_sensation['painful'] = fuzz.trimf(swollen_sensation.universe, [0, 0, 5])
    swollen_sensation['not painful'] = fuzz.trimf(swollen_sensation.universe, [5, 10, 10])

    # Membership function for pus
    pus = ctrl.Antecedent(np.arange(0, 11, 1), 'pus')
    pus['present'] = fuzz.trimf(pus.universe, [0, 0, 5])
    pus['not present'] = fuzz.trimf(pus.universe, [5, 10, 10])

    # Membership function for patch itch
    patch_itch = ctrl.Antecedent(np.arange(0, 11, 1), 'patch_itch')
    patch_itch['not itchy'] = fuzz.trimf(patch_itch.universe, [0, 0, 5])
    patch_itch['itchy'] = fuzz.trimf(patch_itch.universe, [5, 10, 10])

    # Membership function for patch surface
    patch_surface = ctrl.Antecedent(np.arange(0, 11, 1), 'patch_surface')
    patch_surface['unraised'] = fuzz.trimf(patch_surface.universe, [0, 0, 5])
    patch_surface['raised'] = fuzz.trimf(patch_surface.universe, [5, 10, 10])

    # Membership function for patch amount
    patch_amount = ctrl.Antecedent(np.arange(0, 11, 1), 'patch_amount')
    patch_amount['single'] = fuzz.trimf(patch_amount.universe, [0, 0, 5])
    patch_amount['multiple'] = fuzz.trimf(patch_amount.universe, [5, 10, 10])

    # Membership function for patch texture
    patch_texture = ctrl.Antecedent(np.arange(0, 11, 1), 'patch_texture')
    patch_texture['scaly'] = fuzz.trimf(patch_texture.universe, [0, 0, 5])
    patch_texture['smooth'] = fuzz.trimf(patch_texture.universe, [5, 10, 10])

    # Membership function for pigmentation
    pigmentation = ctrl.Antecedent(np.arange(0, 11, 1), 'pigmentation')
    pigmentation['decreased'] = fuzz.trimf(pigmentation.universe, [0, 0, 5])
    pigmentation['increased'] = fuzz.trimf(pigmentation.universe, [5, 10, 10])

    #Membership function for diagnosis
    diagnosis = ctrl.Consequent(np.arange(0, 96, 1), 'diagnosis')
    diagnosis['Buruli Ulcer'] = fuzz.trapmf(diagnosis.universe, [0, 5, 10, 15])
    diagnosis['Cutaneous Leishmaniasis'] = fuzz.trapmf(diagnosis.universe, [10, 15, 20, 25])
    diagnosis['Leprosy'] = fuzz.trapmf(diagnosis.universe, [20, 25, 30, 35])
    diagnosis['Post Kala Azar Dermal Leishmaniasis'] = fuzz.trapmf(diagnosis.universe, [30, 35, 40, 45])
    diagnosis['Mycetoma'] = fuzz.trapmf(diagnosis.universe, [40, 45, 50, 55])
    diagnosis['Onchocerciasis'] = fuzz.trapmf(diagnosis.universe, [50, 55, 60, 65])
    diagnosis['Scabies'] = fuzz.trapmf(diagnosis.universe, [60, 65, 70, 75])
    diagnosis['Yaws'] = fuzz.trapmf(diagnosis.universe, [70, 75, 80, 85])
    diagnosis['Lymphatic Filariasis'] = fuzz.trapmf(diagnosis.universe, [80, 85, 90, 95])

    #Rules
    rule1 = ctrl.Rule(lump_amount['low'] & lump_hardness['solid'] & lump_location['localised']  & 
                    lump_surface['smooth'] & lump_itch['not itchy'], diagnosis['Buruli Ulcer'])
    rule2 = ctrl.Rule(lump_amount['low'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['bumpy'] & lump_itch['not itchy'], diagnosis['Cutaneous Leishmaniasis'])
    rule3 = ctrl.Rule(lump_amount['high'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['smooth'] & lump_itch['slightly itchy'], diagnosis['Post Kala Azar Dermal Leishmaniasis'])
    rule4 = ctrl.Rule(lump_amount['high'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['smooth'] & lump_itch['not itchy'], diagnosis['Leprosy'])
    rule5 = ctrl.Rule(lump_amount['high'] & lump_hardness['soft'] & lump_location['widespread'] & 
                    lump_itch['not itchy'], diagnosis['Mycetoma'])
    rule6 = ctrl.Rule(lump_amount['low'] & lump_hardness['solid'] & lump_location['localised'] & 
                    lump_itch['not itchy'], diagnosis['Mycetoma'])
    rule7 = ctrl.Rule(lump_amount['low'] & (lump_hardness['solid'] | lump_surface['smooth'] | 
                    lump_itch['very itchy']), diagnosis['Onchocerciasis'])
    rule8 = ctrl.Rule(lump_amount['high'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['smooth'] & lump_itch['very itchy'], diagnosis['Onchocerciasis'])
    rule9 = ctrl.Rule(lump_amount['high'] & lump_hardness['soft'] & lump_location['widespread'] & lump_itch['very itchy'], diagnosis['Scabies'])
    rule10 = ctrl.Rule(lump_amount['low'] & (lump_hardness['solid'] | lump_location['widespread']) & 
                    lump_surface['bumpy'] & lump_itch['not itchy'], diagnosis['Yaws'])
    rule11 = ctrl.Rule(lump_amount['low'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['smooth'] & lump_itch['not itchy'], diagnosis['Buruli Ulcer'])
    rule12 = ctrl.Rule(lump_amount['low'] & lump_hardness['solid'] & lump_location['widespread'] & 
                    lump_surface['smooth'] & lump_itch['itchy'], diagnosis['Cutaneous Leishmaniasis'])

    # Ulcer
    rule13 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['localised'] & ulcer_color['red'], diagnosis['Cutaneous Leishmaniasis'])
    rule14 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['widespread'] & ulcer_color['red'], diagnosis['Yaws'])
    rule15 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['widespread'] & ulcer_color['yellow'], diagnosis['Buruli Ulcer'])
    rule16 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['widespread'] & ulcer_color['red'], diagnosis['Leprosy'])
    rule17 = ctrl.Rule(ulcer_sensation['painful'] & ulcer_edges['not undermined'] & ulcer_location['localised'] & ulcer_color['red'], diagnosis['Cutaneous Leishmaniasis'])
    rule18 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['localised'] & ulcer_color['yellow'], diagnosis['Yaws'])
    rule19 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['localised'] & ulcer_color['red'], diagnosis['Buruli Ulcer'])
    rule20 = ctrl.Rule(ulcer_sensation['not painful'] & ulcer_edges['not undermined'] & ulcer_location['widespread'] & ulcer_color['yellow'], diagnosis['Leprosy'])

    # Swollen Limbs
    rule21 = ctrl.Rule(swollen_texture['hard'] & swollen_location['widespread'] & swollen_sensation['not painful'], diagnosis['Lymphatic Filariasis'])
    rule22 = ctrl.Rule(swollen_texture['soft'] & swollen_location['localised'] & swollen_sensation['not painful'], diagnosis['Mycetoma'])
    rule23 = ctrl.Rule(swollen_texture['hard'] & swollen_location['localised'] & swollen_sensation['not painful'], diagnosis['Buruli Ulcer'])
    rule24 = ctrl.Rule(swollen_texture['soft'] & swollen_location['widespread'] & swollen_sensation['painful'], diagnosis['Lymphatic Filariasis'])
    rule25= ctrl.Rule(swollen_texture['hard'] & swollen_location['localised'] & swollen_sensation['painful'], diagnosis['Buruli Ulcer'])
    rule26 = ctrl.Rule(swollen_texture['soft'] & swollen_location['widespread'] & swollen_sensation['painful'], diagnosis['Mycetoma'])
    rule27 = ctrl.Rule(swollen_texture['hard'] & swollen_location['widespread'] & pus['present'], diagnosis['Lymphatic Filariasis'])
    rule28 = ctrl.Rule(swollen_texture['soft'] & swollen_location['localised'] & pus['not present'], diagnosis['Buruli Ulcer'])
    rule29 = ctrl.Rule(swollen_texture['soft'] & swollen_location['widespread'] & pus['not present'], diagnosis['Mycetoma'])

    # Patches
    rule30 = ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['single'] &
                    patch_texture['smooth'] & pigmentation['decreased'], diagnosis['Leprosy'])
    rule31 = ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['multiple'] &
                    patch_texture['smooth'] & pigmentation['increased'], diagnosis['Leishmaniasis'])
    rule32 = ctrl.Rule(patch_itch['not itchy'] & patch_surface['raised'] & patch_amount['multiple'] &
                    patch_texture['smooth'] & pigmentation['decreased'], diagnosis['Post Kala-Azar Dermal Leishmaniasis'])
    rule33 = ctrl.Rule(patch_itch['not itchy'] & patch_surface['raised'] & patch_amount['multiple'] &
                    patch_texture['smooth'] & pigmentation['increased'], diagnosis['Onchocerciasis'])
    rule34= ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['single'] &
                    patch_texture['smooth'] & pigmentation['increased'], diagnosis['Yaws'])
    rule35= ctrl.Rule(patch_itch['not itchy'] & patch_surface['raised'] & patch_amount['single'] &
                    patch_texture['scaly'] & pigmentation['decreased'], diagnosis['Leprosy'])
    rule36= ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['multiple'] &
                    patch_texture['scaly'] & pigmentation['decreased'], diagnosis['Leishmaniasis'])
    rule37= ctrl.Rule(patch_itch['not itchy'] & patch_surface['raised'] & patch_amount['multiple'] &
                    patch_texture['smooth'] & pigmentation['decreased'], diagnosis['Post Kala-Azar Dermal Leishmaniasis'])
    rule38= ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['multiple'] &
                    patch_texture['scaly'] & pigmentation['increased'], diagnosis['Onchocerciasis'])
    rule39 = ctrl.Rule(patch_itch['not itchy'] & patch_surface['unraised'] & patch_amount['single'] &
                    patch_texture['scaly'] & pigmentation['increased'], diagnosis['Yaws'])
    rule40 = ctrl.Rule(patch_itch['itchy'] & patch_surface['raised'] & patch_amount['multiple'] &
                    patch_texture['scaly'] & pigmentation['decreased'], diagnosis['Leprosy'])
    rule41 = ctrl.Rule(patch_itch['itchy'] & patch_surface['raised'] & patch_amount['multiple'] &
                    patch_texture['smooth'] & pigmentation['increased'], diagnosis['Leishmaniasis'])
    rule42 = ctrl.Rule(patch_itch['itchy'] & patch_surface['unraised'] & patch_amount['multiple'] &
                    patch_texture['scaly'] & pigmentation['increased'], diagnosis['Post Kala-Azar Dermal Leishmaniasis'])
    rule43 = ctrl.Rule(patch_itch['itchy'] & patch_surface['unraised'] & patch_amount['single'] &
                    patch_texture['smooth'] & pigmentation['decreased'], diagnosis['Onchocerciasis'])
    rule44 = ctrl.Rule(patch_itch['itchy'] & patch_surface['unraised'] & patch_amount['single'] &
                    patch_texture['scaly'] & pigmentation['increased'], diagnosis['Yaws'])

    from skfuzzy import control as ctrl

    # Create the Fuzzy Control System
    diagnosis_ctrl = ctrl.ControlSystem([rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11])

    # Create the Fuzzy Control System Simulation
    diagnose = ctrl.ControlSystemSimulation(diagnosis_ctrl)

    # Pass the inputs to the FCSS
    # diagnose.input['lump_amount'] = 2 #low
    # diagnose.input['lump_hardness'] = 10 #solid
    # diagnose.input['lump_location'] = 2 #localised
    # diagnose.input['lump_surface'] = 1 #smooth
    # diagnose.input['lump_itch'] = 0 #not itchy
    # data = json.loads(data)
    diagnose.input['lump_amount'] = int(data['lump_amount'])
    diagnose.input['lump_hardness'] = int(data['lump_hardness'])
    diagnose.input['lump_location'] = int(data['lump_location'])
    diagnose.input['lump_surface'] = int(data['lump_surface'])
    diagnose.input['lump_itch'] = int(data['lump_itch'])

    # Calculate the result
    diagnose.compute()
    # print("Crisp result: {:.2f}".format(round(diagnose.output['diagnosis'], 2)))
    # if diagnose.output['diagnosis'] >= 0 and diagnose.output['diagnosis'] <= 12.5:
    #     print("Diagnosis: Buruli Ulcer")
    # elif diagnose.output['diagnosis'] > 12.5 and diagnose.output['diagnosis'] <= 22.5:
    #     print("Diagnosis: Cutaneous Leishmaniasis")
    # elif diagnose.output['diagnosis'] > 22.5 and diagnose.output['diagnosis'] <= 32.5:
    #     print("Diagnosis: Leprosy")
    # elif diagnose.output['diagnosis'] > 32.5 and diagnose.output['diagnosis'] <= 42.5:
    #     print("Diagnosis: Post Kala Azar Dermal Leishmaniasis")
    # elif diagnose.output['diagnosis'] > 42.5 and diagnose.output['diagnosis'] <= 52.5:
    #     print("Diagnosis: Mycetoma")
    # elif diagnose.output['diagnosis'] > 52.5 and diagnose.output['diagnosis'] <= 62.5:
    #     print("Diagnosis: Onchocerciasis")
    # elif diagnose.output['diagnosis'] > 62.5 and diagnose.output['diagnosis'] <= 72.5:
    #     print("Diagnosis: Scabies")
    # elif diagnose.output['diagnosis'] > 72.5 and diagnose.output['diagnosis'] <= 82.5:
    #     print("Diagnosis: Yaws")
    # elif diagnose.output['diagnosis'] > 82.5 and diagnose.output['diagnosis'] <= 95:
    #     print("Diagnosis: Lymphatic Filariasis")
    # else:
    #     print("Diagnosis: Not determined")

    # print("Crisp result: {:.2f}".format(round(diagnose.output['diagnosis'], 2)))
    if diagnose.output['diagnosis'] >= 0 and diagnose.output['diagnosis'] <= 12.5:
        diagnosis_result = "Buruli Ulcer"
        description = "An infection mainly affecting the skin caused by Mycobacterium ulcerans. The mode of transmission is not known, although in many cases there is associated exposure to rivers, streams or wetlands. The first changes are often raised lumps on the skin that subsequently ulcerate. These ulcers are usually single and large, with a yellowish surface appearance and an underlying red moist base; sometimes 2–3 ulcers may appear. The edges of the ulcer are often undermined, making it easy to insert a blunt probe for a short distance underneath it. During the early stages of infection, extensive swelling may extend around the emerging ulcerated area; this is characteristic of Buruli ulcers. Most patients living in areas where the disease is endemic are children aged under 15 years. 
                        "
        investigation = "Swab"
        laboratory_tests = "fTLC and PCR of skin swab/FNA samples"
        medicine_treatment = "Oral rifampicin + oral clarithromycin for 8 weeks"
        supportive_care = "Wound dressing, physiotherapy as needed depending on site and size"
    elif diagnose.output['diagnosis'] > 12.5 and diagnose.output['diagnosis'] <= 22.5:
        diagnosis_result = "Cutaneous Leishmaniasis"
        description = "An infection of the skin or oral mucosa caused by Leishmania protozoa. The infection is spread through biting insects and sandflies.. Reservoir hosts are wild animals, domestic animals and humans. It also presents with lumps on the skin that can be rounded or flat and which may ulcerate in the centre – the base of the ulcer is usually red and bleeds easily. Ulcer edges or borders are often raised. Lesions may be single or multiple, usually occurring on exposed sites such as the face or limbs and containing variable numbers of Leishmania parasites. It may affect any age group; while infection normally occurs sporadically, large numbers of people may be affected in areas where displaced populations are housed. The visible changes may vary in different parts of the endemic range; for instance, in areas of South America lesions may also occur in the mouth or nasal passages. 
                    "
        investigation = "Swab/biopsy"
        laboratory_tests = "Microscopy and PCR of skin swab"
        medicine_treatment = "Stibogluconate, paromomycin, miltefosine, amphotericin B"
        supportive_care = "No"
    elif diagnose.output['diagnosis'] > 22.5 and diagnose.output['diagnosis'] <= 32.5:
        diagnosis_result = "Leprosy"
        description = "Leprosy is a systemic infection caused by the bacterium Mycobacterium leprae, which targets the skin and nerves. Although much of the damage caused by leprosy results from destruction of nerves, the skin is affected early in the course of the infection. This disease is transmitted directly through close contact over long periods. Leprosy is transmitted via droplets, from the nose and mouth, during close and frequent contacts with untreated cases. Infection can occur at any age. The first signs are usually skin patches of variable sizes that are usually dry and whose colour may be slightly paler than the rest of the skin. Another presentation of leprosy takes the form of multiple lumps, also in variable sizes. Leprosy destroys nerves, and it is easy to damage the skin because patients cannot feel hot objects or rubbing shoes, and ulcers form at these sites. If untreated, these ulcers (usually on the hands or on the feet), which are known as neuropathic ulcers, can proceed to destroy other structures in the area including bone. 
                        "
        investigation = "Slit skin smear or skin biopsy"
        laboratory_tests = "Direct microscopy or histology"
        medicine_treatment = "Multidrug antibiotic therapy for 6 or 12 months. e.g. rifampicin, dapsone, clofazimine"
        supportive_care = "Care of insensitive areas (loss of feeling) plus regular wound inspection appropriate footwear, contact survey"
    elif diagnose.output['diagnosis'] > 32.5 and diagnose.output['diagnosis'] <= 42.5:
        diagnosis_result = "Post Kala Azar Dermal Leishmaniasis"
        description = "Post kala-azar dermal leishmaniasis is a complication of systemic or visceral infection with Leishmania that is restricted to a few countries. Some 5–20% of patients who have visceral leishmaniasis develop skin lesions as a late complication of the internal infection. Although it is not completely clear whether these skin lesions are caused by the presence of viable organisms, they do contain a variable number of Leishmania parasites and are treated with anti-Leishmania medications. These lesions are usually either pale patches, or small or large lumps. This form of leishmaniasis may occur at any age but develops in around 10–30% of patients some 6–12 months after apparent resolution of visceral (internal) leishmaniasis. 
                        "
        investigation = "Slit skin smear or biopsy"
        laboratory_tests = "Microscopy, PCR"
        medicine_treatment = "Miltefosine, amphotericin B"
        supportive_care = "-"
    elif diagnose.output['diagnosis'] > 42.5 and diagnose.output['diagnosis'] <= 52.5:
        diagnosis_result = "Mycetoma"
        description = "Mycetoma is an infection of the subcutaneous tissue and bone caused by a variety of different environmental bacteria and fungi. The disease follows implantation of fungi or filamentous bacteria from plant debris or soil through a deep skin injury such as a thorn prick. In mycetoma, there is an infection under the skin that causes the development of a large lump which is usually painless. As this enlarges it becomes covered in smaller lumps, some of which are filled with pus; these discharge yellow or blood-stained fluid that may contain the microcolonies of the infecting organisms seen as tiny black or pale pieces of grit. In advanced mycetoma, the bone in the area is invaded with local destruction and the part of the limb or body affected becomes swollen and deformed. Adults are mainly affected, although rare childhood cases occur. Other deep mycoses seen affecting the skin include chromoblastomycosis where there are thick raised patches often with a rough surface like very large warts. 
                        "
        investigation = "Biopsy"
        laboratory_tests = "Microscopy histology and culture of grains/ biopsy"
        medicine_treatment = "Depends on species. Long term antibiotic or antifungal ± surgery"
        supportive_care = "Walking support"
    elif diagnose.output['diagnosis'] > 52.5 and diagnose.output['diagnosis'] <= 62.5:
        diagnosis_result = "Onchocerciasis"
        description = "It is a systemic filarial infection that affects the skin and the eye. Infection may lead to blindness or debilitating skin disease. The filarial worm is transmitted by black flies that breed near fast running streams and rivers.  People are most likely to complain of troublesome itch. Symptomatic skin signs are produced by the inflammatory response to dying microfilaria (an early larval form of the parasite). Similarly, inflammation near the pupil of the eye, corneal scarring and retinal damage result from the inflammatory response to microfilariae. Many patients with onchocerciasis do not have marked skin symptoms, although as the disease progresses the skin becomes wrinkly and skin folds can enlarge and sag, for example in the groin (hanging groin), and visible depigmentation may occur (leopard skin). However, in many endemic areas, it is accompanied by small itchy lumps on the skin, often around the shoulders or waist and thighs; constant scratching is common. Sometimes, small itchy lumps appear more densely on one limb than the other and the skin of the affected limb becomes rough, chronically itchy and with thickened patches that are darker in colour than the rest of the skin; these patches are intensely itchy. Onchocerciasis can occur at all ages, although most cases are recognized in older children or adults. 
                        "
        investigation = "Skin snip biopsy"
        laboratory_tests = "Microscopy, PCR"
        medicine_treatment = "Oral ivermectin, doxycycline in areas with Loiasis unless known to be low risk for adverse events"
        supportive_care = "Emollients"
    elif diagnose.output['diagnosis'] > 62.5 and diagnose.output['diagnosis'] <= 72.5:
        diagnosis_result = "Scabies"
        description = "Scabies is a very itchy infection caused by the human itch mite. It is common and endemic in many communities in resource-poor settings and is associated with household overcrowding. The infection is transmitted by human to human contact and although it can affect all age groups, it is particularly common in infants and children. The skin in certain areas is covered with small lumps, some containing pus as well as small squiggly lines where the mites burrow into the skin. Hands, feet, external genitalia, buttocks and shoulders are all commonly affected and usually other members of the household are infected and itch. Secondary bacterial (streptococcal) infection of scabies may cause kidney inflammation or nephritis, an immunological reaction to the bacteria, in children."
        investigation = "Clinical diagnosis, dermoscopy, videomicroscopy"
        laboratory_tests = "Presence of mites scraping"
        medicine_treatment = "Permethrin cream, sulphur (4%), ointment 15%, benzyl benzoate, oral ivermectin"
        supportive_care = "Treat family and contacts"
    elif diagnose.output['diagnosis'] > 72.5 and diagnose.output['diagnosis'] <= 82.5:
        diagnosis_result = "Yaws"
        description = "Yaws, a systemic infection affecting the skin and, more rarely, bone, is caused by the bacterium Treponema pertenue, a subspecies of T. pallidum which causes syphilis. However, yaws is not sexually transmitted. The disease is often first recognized in children but may affect all ages; it is spread by direct contact between individuals. Yaws presents with one or multiple skin lesions, which appear as small lumps or nodules. These may have a red or yellow surface colour and often feel soft, pebbled or bumpy. These lumps may break down to leave an area of ulceration in the centre of the nodule or appear in the shape of a small volcano."
        investigation = "Swabs"
        laboratory_tests = "DPP test and PCR of skin swab"
        medicine_treatment = "Single oral dose of azithromycin (2nd line: injectable benzathine penicillin)"
        supportive_care = "Wound dressing, Treat family and contacts"
    elif diagnose.output['diagnosis'] > 82.5 and diagnose.output['diagnosis'] <= 95:
        diagnosis_result = "Lymphatic Filariasis"
        description = "It is transmitted by mosquitoes where the filarial worms live in, dilate and obstruct the lymphatic channels, usually in the lower parts of the body such as the groin and genital area and thighs. Adult worms produce immature microfilariae that can be detected in blood at times specific to the periodicity of the parasite. Infections impair lymph flow, leading to progressive swelling of the lower limbs and, in males, swelling of the scrotum. Other parts of the body can be involved such as the breasts or vulva in females. Although lymphatic filariasis often starts in childhood, it becomes prominent in adults where the results of progressive lymphatic obstruction are apparent. A clinical diagnosis is suggested if one leg becomes swollen and/or if the leg on one side is more swollen than the other. Acute attacks progress the severity of disease. The affected area is warm, reddish and painful. With time the skin may become thickened, covered in small lumps giving a cobbled appearance and susceptible to recurrent infections."
        investigation = "Blood test"
        laboratory_tests = "Rapid diagnostic tests2, thick blood film (collected during hours of peak mf circulation)"
        medicine_treatment = "Oral diethylcarbamazine for 12 days ± doxycycline for 4–6 weeks"
        supportive_care = "Limb cleaning, exercise,wound care, anti-bacterial/anti-fungal creams when needed. Oral antibiotics and antipyretics during acute attacks"
    else:
        diagnosis_result, investigation, laboratory_tests, medicine_treatment, supportive_care = "Not determined"

    result = {
        "crisp_result": "{:.2f}".format(round(diagnose.output['diagnosis'], 2)),
        "diagnosis_result": diagnosis_result,
        "description": description,
        "investigation": investigation,
        "laboratory_tests": laboratory_tests,
        "medicine_treatment": medicine_treatment,
        "supportive_care": supportive_care
    }
    # print(data['lump_amount'])
    # print(type(data['lump_amount']))
    print("{:.2f}".format(round(diagnose.output['diagnosis'], 2)))
    return result