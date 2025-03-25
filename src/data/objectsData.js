const storyData =  [
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682654/OKINA-02-27_16.24.10_-_A_colorful_yet_slightly_realistic_collection_of_coins_on_a_white_background._The_coins_have_bright_and_inviting_metallic_colors_such_as_gold_silver_zke2nd_skgztn.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682653/OKINA-02-27_08.48.37_-_A_colorful_yet_slightly_realistic_pair_of_gloves_on_a_white_background._The_gloves_have_a_soft_well-defined_texture_with_bright_and_inviting_colors_s_m10pac_gds9he.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682652/OKINA-02-27_11.43.22_-_A_colorful_yet_slightly_realistic_ring_on_a_white_background._The_ring_has_a_smooth_elegant_design_with_bright_and_inviting_colors_such_as_gold_silv_dbycxq_glflf0.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682651/OKINA-02-27_11.43.23_-_A_colorful_yet_slightly_realistic_flower_on_a_white_background._The_flower_has_bright_and_inviting_colors_such_as_red_blue_yellow_and_green._It_fea_mazjj9_mbjsiw.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682650/OKINA-02-27_16.24.04_-_A_colorful_yet_slightly_realistic_chain_on_a_white_background._The_chain_has_a_smooth_well-defined_shape_with_bright_and_inviting_metallic_colors_suc_ws2hrv_ymkdzh.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682650/OKINA-02-27_16.24.07_-_A_colorful_yet_slightly_realistic_stack_of_paper_money_banknotes_on_a_white_background._The_money_has_bright_and_inviting_colors_such_as_green_blue_qorlxm_hilplq.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682646/OKINA-02-27_08.42.33_-_A_colorful_yet_slightly_realistic_cargo_ship_on_a_white_background._The_ship_has_a_bright_and_inviting_design_with_colors_such_as_red_blue_yellow_a_bn8vce_bb3pxt.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682646/OKINA-02-27_08.48.28_-_A_colorful_yet_slightly_realistic_tutu_on_a_white_background._The_tutu_has_a_soft_fluffy_texture_with_bright_and_inviting_colors_such_as_pink_blue_ofusch_mnnijq.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682645/OKINA-02-27_17.05.06_-_A_colorful_yet_slightly_realistic_train_on_a_white_background._The_train_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_red_lejdwv_g0h4hi.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682644/OKINA-02-27_16.52.28_-_A_colorful_yet_slightly_realistic_excavator_on_a_white_background._The_excavator_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_gwauh1_cui4l3.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682641/OKINA-02-27_08.42.26_-_A_colorful_yet_slightly_realistic_fairy_tale_book_on_a_white_background._The_book_has_a_bright_and_inviting_cover_with_magical_illustrations_in_colors_wx5is5_lmw08o.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682640/OKINA-02-27_11.47.02_-_A_colorful_yet_slightly_realistic_tree_trunk_on_a_white_background._The_trunk_has_a_natural_slightly_rugged_shape_with_bright_and_inviting_earthy_ton_mihjwu_pxnz07.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682638/OKINA-02-27_11.49.35_-_A_colorful_yet_slightly_realistic_bird_s_nest_on_a_white_background._The_nest_has_a_natural_woven_texture_with_bright_and_inviting_earthy_tones_such_kanvyg_altofb.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682637/OKINA-02-27_08.42.30_-_A_colorful_yet_slightly_realistic_pirate_ship_on_a_white_background._The_ship_has_a_bright_and_inviting_design_with_colors_such_as_red_blue_yellow_ypykv5_exl3zp.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682637/OKINA-02-27_17.05.36_-_A_colorful_yet_slightly_realistic_motorcycle_on_a_white_background._The_motorcycle_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_su_w1cl5q_i13fbz.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682635/OKINA-02-27_16.29.46_-_A_colorful_yet_slightly_realistic_helicopter_on_a_white_background._The_helicopter_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_su_ibkrif_y9vnuv.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682635/OKINAI_19.50.34_-_A_colorful_yet_slightly_realistic_shopping_cart_on_a_white_background._The_cart_has_a_modern_sleek_design_with_bright_and_inviting_colors_such_as_red_xcdjcm_qpllyq.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682632/OKINAI_20.47.57_-_A_colorful_yet_slightly_realistic_toaster_on_a_white_background._The_toaster_has_a_modern_smooth_design_with_bright_and_inviting_colors_such_as_red_ehpmrr_jbitxp.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682631/OKINA-02-27_16.46.39_-_A_colorful_yet_slightly_realistic_cement_mixer_truck_on_a_white_background._The_truck_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_yxfrlf_j7xb3v.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682630/OKINA-02-27_16.29.50_-_A_colorful_yet_slightly_realistic_fire_truck_on_a_white_background._The_fire_truck_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_su_ufobbi_jefk2g.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682629/OKINAI_20.43.22_-_A_colorful_yet_slightly_realistic_picnic_basket_on_a_white_background._The_basket_has_a_woven_texture_with_bright_and_inviting_accents_such_as_red_bl_tqy99f_kbytzc.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682628/OKINA-02-27_12.17.07_-_A_colorful_yet_slightly_realistic_volleyball_on_a_white_background._The_volleyball_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_su_fz8aje_bsivt8.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682627/OKINA-02-27_16.29.51_-_A_colorful_yet_slightly_realistic_ambulance_on_a_white_background._The_ambulance_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_fyjdcs_jxgx5h.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682626/OKINA-02-27_08.42.23_-_A_colorful_yet_slightly_realistic_puzzle_set_on_a_white_background._The_puzzle_pieces_have_bright_and_inviting_colors_such_as_red_blue_yellow_and_g_uwqpun_wmqi6x.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682624/OKINA-02-27_08.39.27_-_A_colorful_yet_slightly_realistic_television_on_a_white_background._The_television_has_a_modern_sleek_design_with_bright_and_inviting_colors_such_as_j8uasj_w98aod.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682624/OKINA-02-27_17.50.42_-_A_colorful_yet_slightly_realistic_padlock_on_a_white_background._The_padlock_has_a_smooth_well-defined_shape_with_bright_and_inviting_metallic_colors_hlgxum_b59bol.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682622/OKINA-02-27_08.49.22_-_A_colorful_yet_slightly_realistic_crown_on_a_white_background._The_crown_has_a_smooth_elegant_design_with_bright_and_inviting_colors_such_as_gold_re_u4veln_clg2pz.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682621/OKINA-02-27_11.44.08_-_A_colorful_yet_slightly_realistic_leaf_on_a_white_background._The_leaf_has_bright_and_inviting_colors_such_as_green_yellow_and_red._It_features_deli_tprhea_pujtl0.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682620/OKINA-02-27_08.42.32_-_A_colorful_yet_slightly_realistic_fishing_boat_on_a_white_background._The_boat_has_a_bright_and_inviting_design_with_colors_such_as_red_blue_yellow_yn10o2_hwgjxn.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682619/OKINA-02-27_16.09.40_-_A_colorful_yet_slightly_realistic_bowling_ball_on_a_white_background._The_bowling_ball_has_a_smooth_polished_surface_with_bright_and_inviting_colors_hbqxay_yvpfza.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682618/OKINA-02-27_16.52.25_-_A_colorful_yet_slightly_realistic_bulldozer_on_a_white_background._The_bulldozer_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_laualp_pdg20d.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682617/OKINA-02-27_08.48.40_-_A_colorful_yet_slightly_realistic_scarf_on_a_white_background._The_scarf_has_a_soft_well-defined_texture_with_bright_and_inviting_colors_such_as_red_eiqagf_bks5re.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682615/OKINA-02-27_08.48.25_-_A_colorful_yet_slightly_realistic_helmet_on_a_white_background._The_helmet_has_a_smooth_well-defined_structure_with_bright_and_inviting_colors_such_a_ib9r8b_dtsdhw.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682614/OKINA-02-27_17.06.57_-_A_colorful_yet_slightly_realistic_bar_of_soap_on_a_white_background._The_soap_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_wqdmjp_khlusg.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682613/OKINA-02-27_11.49.52_-_A_colorful_yet_slightly_realistic_star_on_a_white_background._The_star_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_yellow_fb3a8w_nyaxvh.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682612/OKINAI_19.50.02_-_A_colorful_yet_slightly_realistic_suitcase_on_a_white_background._The_suitcase_has_a_modern_sleek_design_with_bright_and_inviting_colors_such_as_red_hsaacs_z3hedi.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682611/OKINAI_20.47.56_-_A_colorful_yet_slightly_realistic_backpack_on_a_white_background._The_backpack_has_a_smooth_well-defined_structure_with_bright_and_inviting_colors_su_luntpe_syf0u0.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682610/relojOb_udpjay.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682609/OKINA-02-27_12.17.05_-_A_colorful_yet_slightly_realistic_rugby_ball_on_a_white_background._The_rugby_ball_has_a_smooth_well-defined_shape_with_a_traditional_oval_design_and_fzi9wk_qscbdd.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682609/OKINA-02-27_16.20.28_-_A_colorful_yet_slightly_realistic_shampoo_bottle_on_a_white_background._The_shampoo_bottle_has_a_smooth_well-defined_shape_with_bright_and_inviting_c_wisohz_cckxmd.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682607/OKINAI_20.49.08_-_A_colorful_yet_slightly_realistic_shopping_basket_on_a_white_background._The_basket_has_a_sturdy_plastic_structure_with_bright_and_inviting_colors_suc_qgqigs_w1vt1q.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682602/OKINA-02-27_08.39.24_-_A_colorful_yet_slightly_realistic_baby_stroller_on_a_white_background._The_stroller_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_a_zuvkq2_u1rivf.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682601/OKINA-02-27_16.24.17_-_A_colorful_yet_slightly_realistic_traffic_light_on_a_white_background._The_traffic_light_has_a_smooth_well-defined_shape_with_bright_and_inviting_col_vlpoux_miqpi2.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682599/OKINA-02-27_17.05.47_-_A_colorful_yet_slightly_realistic_piano_on_a_white_background._The_piano_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_red_vhparg_ybbyt4.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682598/OKINAI_19.47.51_-_A_colorful_yet_slightly_realistic_vacuum_cleaner_on_a_white_background._The_vacuum_cleaner_has_a_modern_sleek_design_with_bright_and_inviting_colors_ifbcmt_m1kjde.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682597/OKINA-02-27_16.24.12_-_A_colorful_yet_slightly_realistic_computer_keyboard_on_a_white_background._The_keyboard_has_a_smooth_well-defined_shape_with_bright_and_inviting_colo_wybayf_g5bd1c.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682596/OKINAI_19.42.37_-_A_colorful_yet_slightly_realistic_toaster_on_a_white_background._The_toaster_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_red_xrg2kb_xqfffm.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682595/tamborOb_klibwo.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682594/OKINA-02-27_11.49.42_-_A_colorful_yet_slightly_realistic_moon_on_a_white_background._The_moon_has_a_soft_glowing_texture_with_bright_and_inviting_shades_of_gray_silver_an_aynvme_cspwio.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682592/OKINA-02-27_08.39.33_-_A_colorful_yet_slightly_realistic_toy_kitchen_set_on_a_white_background._The_toy_kitchen_has_a_smooth_modern_design_with_bright_and_inviting_colors_s_aqeip3_f4e4ad.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682591/OKINAI_20.59.52_-_A_colorful_yet_slightly_realistic_toolbox_on_a_white_background._The_toolbox_has_a_sturdy_structure_with_bright_and_inviting_colors_such_as_red_blue_f2c4os_um4cks.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682590/cocheOb_bblgug.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682590/OKINA-02-27_08.48.32_-_A_colorful_yet_slightly_realistic_necktie_on_a_white_background._The_necktie_has_a_smooth_well-defined_texture_with_bright_and_inviting_colors_such_a_a38qrn_dwld9b.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682588/OKINA-02-27_16.10.14_-_A_colorful_yet_slightly_realistic_parachute_on_a_white_background._The_parachute_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_zs1nga_g8qqci.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682586/OKINAI_20.59.40_-_A_colorful_yet_slightly_realistic_flashlight_on_a_white_background._The_flashlight_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_ttnpft_pn7nlx.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682585/bicicletaOb_fboskl.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682585/OKINA-02-27_17.05.51_-_A_colorful_yet_slightly_realistic_trumpet_on_a_white_background._The_trumpet_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_tu4fua_duumnk.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682584/OKINAI_20.48.52_-_A_colorful_yet_slightly_realistic_watering_hose_on_a_white_background._The_hose_has_a_smooth_flexible_structure_with_bright_and_inviting_colors_such_xfenl5_vvkyi1.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682584/OKINA-02-27_11.49.48_-_A_colorful_yet_slightly_realistic_Christmas_tree_on_a_white_background._The_tree_has_bright_and_inviting_green_tones_with_festive_decorations_such_as_nravb4_hiy2zu.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682581/OKINA-02-27_08.48.49_-_A_colorful_yet_slightly_realistic_pair_of_sunglasses_on_a_white_background._The_sunglasses_have_a_smooth_well-defined_structure_with_bright_and_invit_dvgu8x_gavkfk.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682580/mochilaOB_b4gyt9.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682579/OKINA-02-27_17.06.10_-_A_colorful_yet_slightly_realistic_flute_on_a_white_background._The_flute_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_silv_pypry9_kwcdz8.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682578/OKINA-02-27_12.17.12_-_A_colorful_yet_slightly_realistic_baseball_on_a_white_background._The_baseball_has_a_smooth_well-defined_shape_with_a_bright_white_surface_and_classi_lse39w_nq7msu.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682577/OKINA-02-27_12.20.19_-_A_colorful_yet_slightly_realistic_hockey_stick_on_a_white_background._The_hockey_stick_has_a_smooth_well-defined_shape_with_bright_and_inviting_color_k9jcfq_sfxnxb.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682576/OKINAI_20.43.19_-_A_colorful_yet_slightly_realistic_watering_can_on_a_white_background._The_watering_can_has_a_modern_smooth_design_with_bright_and_inviting_colors_suc_q3cjhx_iafluh.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682574/trenOb_b0l1qt.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682572/OKINA-02-27_16.29.48_-_A_colorful_yet_slightly_realistic_airplane_on_a_white_background._The_airplane_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_a_euxsio_uhn6kp.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682571/OKINA-02-27_17.50.07_-_A_colorful_yet_slightly_realistic_magnifying_glass_on_a_white_background._The_magnifying_glass_has_a_smooth_well-defined_shape_with_bright_and_inviti_leunbg_tenkjw.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682570/OKINA-02-27_11.49.59_-_A_colorful_yet_slightly_realistic_seashell_on_a_white_background._The_seashell_has_a_smooth_well-defined_structure_with_bright_and_inviting_colors_su_mzzxmi_ysxi6r.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682570/OKINA-02-27_12.20.16_-_A_colorful_yet_slightly_realistic_bow_and_arrow_on_a_white_background._The_bow_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_a_svzogn_d9pptt.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682568/OKINA-02-27_17.05.49_-_A_colorful_yet_slightly_realistic_guitar_on_a_white_background._The_guitar_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_re_jxymtz_mszvs8.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682567/OKINA-02-27_12.20.13_-_A_colorful_yet_slightly_realistic_boxing_glove_on_a_white_background._The_glove_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_ob0rhs_cjq4bf.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682564/OKINA-02-27_17.06.07_-_A_colorful_yet_slightly_realistic_gold_medal_on_a_white_background._The_medal_has_a_smooth_well-defined_shape_with_bright_golden_tones._It_features_a_iddnny_wkpgpv.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682563/OKINA-02-27_08.49.04_-_A_colorful_yet_slightly_realistic_pair_of_swimming_goggles_on_a_white_background._The_goggles_have_a_smooth_well-defined_structure_with_bright_and_in_tsy5oj_syfk12.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682563/OKINA-02-27_17.11.54_-_A_colorful_yet_slightly_realistic_pair_of_scissors_on_a_white_background._The_scissors_have_a_smooth_well-defined_shape_with_bright_and_inviting_colo_fagd3o_j83gv8.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682561/OKINA-02-27_11.53.21_-_A_colorful_yet_slightly_realistic_pitcher_on_a_white_background._The_pitcher_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_xbbuyl_y49zo0.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682560/OKINA-02-27_08.48.30_-_A_colorful_yet_slightly_realistic_high-heeled_shoe_on_a_white_background._The_shoe_has_a_smooth_elegant_design_with_bright_and_inviting_colors_such_a_fokj2g_glgdnd.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682560/OKINA-02-27_16.09.45_-_A_colorful_yet_slightly_realistic_playground_slide_on_a_white_background._The_slide_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_s_rxixb4_hge9ui.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682558/OKINA-02-27_11.53.06_-_A_colorful_yet_slightly_realistic_salt_shaker_on_a_white_background._The_salt_shaker_has_a_smooth_well-defined_design_with_bright_and_inviting_colors_yrj1j9_ww8ncg.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682557/OKINA-02-27_16.16.10_-_A_colorful_yet_slightly_realistic_bathtub_on_a_white_background._The_bathtub_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_ddepmz_xtyucn.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682556/OKINA-02-27_11.49.54_-_A_colorful_yet_slightly_realistic_snowman_on_a_white_background._The_snowman_has_a_bright_and_inviting_design_with_smooth_rounded_snowballs_a_carrot_q7mir9_aqonav.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682556/OKINA-02-27_11.49.39_-_A_colorful_yet_slightly_realistic_sun_on_a_white_background._The_sun_has_a_warm_inviting_glow_with_bright_colors_such_as_yellow_orange_and_red._It_dtiixf_o2beeg.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682555/OKINA-02-27_08.42.28_-_A_colorful_yet_slightly_realistic_spyglass_catalejo_on_a_white_background._The_spyglass_has_a_bright_and_inviting_design_with_colors_such_as_red_bl_vqauxe_zsttbt.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682553/OKINA-02-27_17.25.28_-_A_colorful_yet_slightly_realistic_pencil_on_a_white_background._The_pencil_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_ye_izfd4p_tma8yx.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682552/OKINA-02-27_16.16.12_-_A_colorful_yet_slightly_realistic_gift_box_on_a_white_background._The_gift_box_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_a_lebjdu_u6jvcv.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682551/OKINA-02-27_11.56.36_-_A_colorful_yet_slightly_realistic_soccer_ball_on_a_white_background._The_soccer_ball_has_a_smooth_well-defined_shape_with_classic_black_and_white_pen_pkuraj_eu7ceu.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682550/OKINAI_20.59.38_-_A_colorful_yet_slightly_realistic_coffee_grinder_on_a_white_background._The_grinder_has_a_smooth_well-defined_structure_with_bright_and_inviting_colo_huatpy_b7orvu.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682549/OKINA-02-27_08.49.36_-_A_colorful_yet_slightly_realistic_umbrella_on_a_white_background._The_umbrella_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_red_glo3fb_m4gh4a.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682548/OKINA-02-27_17.50.12_-_A_colorful_yet_slightly_realistic_marker_on_a_white_background._The_marker_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_re_pzlfez_zh78lg.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682547/OKINA-02-27_11.44.11_-_A_colorful_yet_slightly_realistic_mushroom_on_a_white_background._The_mushroom_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_a_g1gyux_snw5bp.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682546/OKINA-02-27_11.56.38_-_A_colorful_yet_slightly_realistic_basketball_on_a_white_background._The_basketball_has_a_smooth_well-defined_shape_with_traditional_orange_color_and_gu88ur_ajci2k.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682545/OKINAI_20.48.50_-_A_colorful_yet_slightly_realistic_stapler_on_a_white_background._The_stapler_has_a_smooth_well-defined_structure_with_bright_and_inviting_colors_such_mwzgc6_urrva9.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682544/OKINAI_19.47.33_-_A_colorful_yet_slightly_realistic_electric_kettle_on_a_white_background._The_kettle_has_a_modern_smooth_design_with_bright_and_inviting_colors_such_a_nwqrm5_lfzddc.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682543/OKINA-02-27_12.20.21_-_A_colorful_yet_slightly_realistic_tennis_racket_on_a_white_background._The_racket_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_suc_dacm5z_xnhpha.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682542/OKINA-02-27_12.17.03_-_A_colorful_yet_slightly_realistic_tennis_ball_on_a_white_background._The_tennis_ball_has_a_smooth_well-defined_shape_with_a_bright_yellow-green_color_foezl7_ieo4mi.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682541/OKINAI_20.48.47_-_A_colorful_yet_slightly_realistic_kettle_on_a_white_background._The_kettle_has_a_smooth_well-defined_structure_with_bright_and_inviting_colors_such_a_tt94uo_t0vke8.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682540/OKINAI_20.48.01_-_A_colorful_yet_slightly_realistic_rolling_pin_on_a_white_background._The_rolling_pin_has_a_smooth_well-defined_wooden_texture_with_bright_and_invitin_ca5oa1_z5zcsp.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682540/OKINA-02-27_16.29.43_-_A_colorful_yet_slightly_realistic_rocket_on_a_white_background._The_rocket_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_as_re_kffvqf_ysdwzn.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682538/OKINAI_19.49.44_-_A_colorful_yet_slightly_realistic_blender_on_a_white_background._The_blender_has_a_modern_sleek_design_with_bright_and_inviting_colors_such_as_red_b_beyu3d_mgxnnz.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682537/OKINAI_19.50.16_-_A_colorful_yet_slightly_realistic_pair_of_rain_boots_on_a_white_background._The_boots_have_a_smooth_modern_design_with_bright_and_inviting_colors_suc_f5dozt_xtu4w4.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682537/avionOb_mdu2dx.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682535/OKINA-02-27_12.20.17_-_A_colorful_yet_slightly_realistic_boomerang_on_a_white_background._The_boomerang_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_such_he06e2_ugyjm5.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682534/OKINAI_20.59.42_-_A_colorful_yet_slightly_realistic_thermos_bottle_on_a_white_background._The_thermos_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_a_yzeuet_sou7uu.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682533/cazoOb_zkjbgs.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682532/OKINAI_20.43.16_-_A_colorful_yet_slightly_realistic_coffee_mug_on_a_white_background._The_mug_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_red_b_o3nbl9_oslcba.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682531/OKINA-02-27_16.16.14_-_A_colorful_yet_slightly_realistic_toothbrush_on_a_white_background._The_toothbrush_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_su_u6jsjq_g3qbca.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682530/sartenOb_re6m2u.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682530/OKINA-02-27_12.20.14_-_A_colorful_yet_slightly_realistic_fishing_rod_on_a_white_background._The_fishing_rod_has_a_smooth_well-defined_shape_with_bright_and_inviting_colors_ygzgmt_l60dlw.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682528/OKINAI_19.47.12_-_A_colorful_yet_slightly_realistic_desk_lamp_on_a_white_background._The_lamp_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_red_b_dpfnjv_pfka1y.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682528/OKINA-02-27_12.21.13_-_A_completely_black_8-ball_from_a_billiards_set_on_a_white_background._The_ball_has_a_smooth_polished_surface_with_a_deep_black_color_and_a_faint_refl_buvuof_lwftom.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682527/OKINAI_19.49.07_-_A_colorful_yet_slightly_realistic_chair_on_a_white_background._The_chair_has_a_smooth_modern_design_with_bright_and_inviting_colors_such_as_red_blue_pcshqy_jbjb2t.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682526/teteraOb_ddrrri.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682525/OKINAI_19.42.35_-_A_colorful_yet_slightly_realistic_rolling_pin_on_a_white_background._The_rolling_pin_has_a_smooth_well-defined_wooden_texture_with_bright_and_invitin_upxhzt_z9qw8j.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682524/OKINA-02-27_12.20.22_-_A_colorful_yet_slightly_realistic_ping_pong_paddle_on_a_white_background._The_paddle_has_a_smooth_well-defined_shape_with_a_bright_red_rubber_surface_rtbfjx_v5oigo.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682523/OKINA-02-27_12.17.08_-_A_colorful_yet_slightly_realistic_ping_pong_ball_on_a_white_background._The_ping_pong_ball_has_a_smooth_well-defined_shape_with_a_bright_and_inviting_eqerfu_lhjsib.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682523/OKINA-02-27_11.49.45_-_A_colorful_yet_slightly_realistic_stone_on_a_white_background._The_stone_has_a_smooth_well-defined_texture_with_bright_and_inviting_earthy_tones_such_si6a9g_o9za6x.png",
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682522/OKINA-02-27_11.44.10_-_A_colorful_yet_slightly_realistic_stick_on_a_white_background._The_stick_has_a_natural_slightly_curved_shape_with_bright_and_inviting_earthy_tones_su_cmshsr_hoirza.png",
  ]

export default storyData
