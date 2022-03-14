
const patients = require("../models/patient-model.js");
const exams = require("../models/exam-model.js");
const asyncHandler = require("express-async-handler");






getGenInfo = asyncHandler( async (req, res) =>
{
  let infos = new Array();
  //let patientExams;
  const allPatients = await patients.find({});

  if (allPatients)
  {
    for (let i = 0; i < allPatients.length; ++i)
    {
      let patientExams = await exams.find({patientId: allPatients[i]._id});
      if (patientExams)
      {
        let lastExam = patientExams.length-1;
        let image = "NULL";
        let tempExamId = "NULL";
        let tempExamTrueId = '0';
        let tempKeyFindings = "NULL";

        if (patientExams.length > 0)
        {
          lastExam = patientExams.length-1;
          image = patientExams[lastExam].pngFilename;
          tempExamId = patientExams[lastExam].examId
          tempExamTrueId = patientExams[lastExam]._id.toString()
          tempKeyFindings = patientExams[lastExam].keyFindings
        }

        let tempInfo =
        {
          id: allPatients[i]._id,
          exam: tempExamTrueId,
          examId: tempExamId,
          pngFilename: image,
          keyFindings: tempKeyFindings,
          age: allPatients[i].age,
          sex: allPatients[i].sex,
          bmi: allPatients[i].bmi,
          zip: allPatients[i].zip
        };

        infos.push(tempInfo);
      }
      else
      {
        res.status(400);
        throw new Erro("Failure at getGenInfo\nCouldn't get any exams for patient " + patient._id);
      }
    }

    res.status(200).json(infos);
  }
  else
  {
    res.status(400);
    throw new Error("Failure at getGenInfo\nCouldn't get any patients");
  }
})

module.exports = getGenInfo