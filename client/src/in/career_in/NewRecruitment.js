import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function New(props) {
  const {
		addDialogOpen,
		setAddDialogOpen,
		handleCreateRecruitment
	} = props
	
	const [title, setTitle] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [workType, setWorkType] = useState('')
	const [salary, setSalary] = useState('')
	const [experience, setExperience] = useState('')
	const [diploma, setDiploma] = useState('')
	const [requirement, setRequirement] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = (e) => {
		console.log('submit')
		e.preventDefault()
		setAddDialogOpen(false)
		const data = {
			title: title,
			company_name: companyName,
			work_type: workType,
			salary: salary,
			experience: experience,
			diploma: diploma,
			requirement: requirement,
			description: description
		}
		handleCreateRecruitment(data)
	}

	return (
		<Dialog
      open={addDialogOpen}
      onClose={() => setAddDialogOpen(false)}
			fullWidth
			TransitionComponent={Transition}
      maxWidth='lg'
    >
			<DialogTitle id="form-dialog-title">新增職缺</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<DialogContentText>
						請於下方輸入職缺資訊
					</DialogContentText>
						<TextField
							margin="dense"
							label="職缺名稱"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="公司名稱"
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="工作時長"
							value={workType}
							onChange={(e) => setWorkType(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="薪資"
							value={salary}
							onChange={(e) => setSalary(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="工作經驗需求"
							value={experience}
							onChange={(e) => setExperience(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="學歷要求"
							value={diploma}
							onChange={(e) => setDiploma(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="先備技能"
							value={requirement}
							onChange={(e) => setRequirement(e.target.value)}
							fullWidth
							multiline
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							margin="dense"
							label="工作介紹"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							fullWidth
							multiline
							InputLabelProps={{ shrink: true }}
						/>
					
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setAddDialogOpen(false)} color="primary">
						取消
					</Button>
					<Button type="submit" color="primary">
						新增
					</Button>
				</DialogActions>
			</form>
    </Dialog>
	)
}