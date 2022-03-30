import React, { useState } from "react";
import styles from "./Developer.module.css";
import Heading from "../../components/Heading/Heading";
import Page_transition from "../../components/Animation/Transition";

import { Grid, Card } from "@mui/material";

function Developer() {
  return (
    <Page_transition>
      <div className={styles.mainbox}>
        <Heading text="DEVELOPERS" />
        <div className={styles.contentbox}>
          <div className={styles.subcontentbox}>
            <Grid container spacing={2} sx={{ padding: "2rem" }}>
              <Grid className={styles.gridbox} item xs={12} sm={6}>
                <h2>Varadharaj Palani</h2>
              </Grid>
              <Grid className={styles.gridbox} item xs={12} sm={6}>
                <h2>Srishti Gulecha R</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Dharun A</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Kavin Prasath K</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Vaalarivan P</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Bava Viknesh R M G</h2>
              </Grid>
              <Grid className={styles.gridbox} item xs={12} sm={6}>
                <h2>Sarvesh E</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Harshanand S V</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Balamurugan K</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Aravind S</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Nithish V</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Nandikaa T</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Vidharshana Ravi</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Poovarasan T</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Jathin M</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Balaji A</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Varsha S</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Muthu Palaniyappan</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Poojaa</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Chandrasekhar M</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Tejeashwar D</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Sahai Jordi Alan A</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Chameli R</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Aravindha Lochanan</h2>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Page_transition>
  );
}

export default Developer;
